import UpdateReservationForm from '@/app/_components/UpdateReservationForm';
import { auth } from '@/app/_lib/auth';
import { getBooking, getCabin } from '@/app/_lib/data-service';
import { isBefore } from 'date-fns';

export default async function Page({ params }) {
	const { bookingId } = params;
	const booking = await getBooking(bookingId);
	// console.log(`🚧 booking:`, booking);
	const { maxCapacity } = await getCabin(booking.cabinId);
	// console.log(`🚧 maxCapacity:`, maxCapacity);

	const session = await auth(); // very impoortant checking authentication
	if (!session) throw new Error('You must be logged in');

	if (!(booking.guestId === session.user.guestId))
		throw new Error('Sorry, you can edit only YOUR booking');

	if (!isBefore(new Date(), new Date(booking.startDate)))
		throw new Error(`Sorry, you are not allowed to edit PAST booking`);

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Edit Reservation #{bookingId}
				<UpdateReservationForm maxCapacity={maxCapacity} booking={booking} />
			</h2>
		</div>
	);
}
