'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function updateGuest(formData) {
	const session = await auth(); // very impoortant checking authentication
	if (!session) throw new Error('You must be logged in');

	const nationalID = formData.get('nationalID');
	const [nationality, countryFlag] = formData.get('nationality').split('%');

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
		throw new Error('Please, provide a valid national ID');

	const updateData = { nationality, countryFlag, nationalID };

	const { error } = await supabase
		.from('guests')
		.update(updateData)
		.eq('id', session.user.guestId);

	if (error) throw new Error('Guest could not be updated');

	revalidatePath('/account/profile'); // very important to revalidate cache after all manipolations to have the fresh state of the information
}

export async function updateBooking(formData) {
	const session = await auth(); // very impoortant checking authentication
	if (!session) throw new Error('You must be logged in');

	// const [numGuests = Number(numGuests), id2] = formData
	// 	.get('numGuests')
	// 	.split('%');

	const numGuests = Number(formData.get('numGuests'));
	const observations = formData.get('observations');
	const id = Number(formData.get('bookingId'));

	const guestBookings = await getBookings(session.user.guestId); // Checks if it is the users booking
	const guestBookingIds = guestBookings.map((booking) => Number(booking.id));

	if (!guestBookingIds.includes(id))
		throw new Error('You are not allowed to update this booking');

	if (
		!/^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?()\-:;@#$%^&*+=_~]{0,5000}$/.test(observations)
	)
		throw new Error(
			`Your message contains restricted symbols or longer, than 5 000 symbols`
		);

	const updatedFields = { numGuests, observations };

	const { error } = await supabase
		.from('bookings')
		.update(updatedFields)
		.eq('id', id)
		.select()
		.single();

	if (error) throw new Error('Booking could not be updated');

	revalidatePath(`/account/reservations/edit/${id}`);

	redirect('/account/reservations');
}

export async function deleteReservation(bookingId) {
	// For testing
	// await new Promise((res) => setTimeout(res, 2000));
	// throw new Error();

	const session = await auth(); // very impoortant checking authentication
	if (!session) throw new Error('You must be logged in');

	const guestBookings = await getBookings(session.user.guestId); // Checks if it is the users booking
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId))
		throw new Error('You are not allowed to delete this booking');

	const { error } = await supabase
		.from('bookings')
		.delete()
		.eq('id', bookingId);

	if (error) throw new Error('Booking could not be deleted');

	revalidatePath('/account/reservations'); // very important to revalidate cache after all manipolations to have the fresh state of the information
}

export async function signInAction() {
	await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
	await signOut({ redirectTo: '/' });
}
