'use client';

import ReservationCard from './ReservationCard';
import { useOptimistic } from 'react';
import { deleteReservation } from '@/app/_lib/actions';

function ReservationList({ bookings }) {
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		// output optimisticBookings - the data that in the biginning is equal to the bookings(current data state) and then will be changed to optimistic state, optimisticDelete - dispatch function, that triggers the optimistic hook in the handleDelete function down there and than pass this handleDelete to the ReservationCard onDelete option
		// useOptimistic takes 2 arguments
		bookings, // 1 argumnet: bookings - current state (which is now rendered in the UI)
		(currentBookings, bookingId) => {
			// 2 argument - state update function, which will determine the next optimistic state of the data. It takes-in the currentState and the peace of information that is nesseccary for real updating the state (bookingId) for the actual async operation - (await deleteReservation(bookingId))
			return currentBookings.filter((booking) => booking.id !== bookingId); // here we returning the state which should be in case of uptimistic updating the data and the state
		}
	);

	async function handleDelete(bookingId) {
		optimisticDelete(bookingId);
		await deleteReservation(bookingId);
	}

	return (
		<ul className="space-y-6">
			{optimisticBookings.map((booking) => (
				<ReservationCard
					booking={booking}
					onDelete={handleDelete}
					key={booking.id}
				/>
			))}
		</ul>
	);
}

export default ReservationList;
