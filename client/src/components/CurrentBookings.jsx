import React from "react";
import './CurrentBookings.css';
import CurrentBookingsCard from "./CurrentBookingsCard";

function CurrentBookings() {

  const bookingsArray = [{id: 1, date: "5/6/2023", from: "Kisumu", to: "Mombasa", price: 8000, departureTime: "12:00", arrivalTime: "13:00", airport: "Kisumu International airport"},
                         {id: 2, date: "7/6/2023", from: "Mombasa", to: "Nairobi", price: 10000, departureTime: "11:00", arrivalTime: "12:00", airport: "Moi International airport"}
                        ];

  const bookings = bookingsArray.map((booking) => {
    return <CurrentBookingsCard key={booking.id} date={booking.date} from={booking.from} to={booking.to} price={booking.price} departureTime={booking.departureTime}
                                arrivalTime={booking.arrivalTime} airport={booking.airport}/>
  });

  return(
    <>
      <h1>Current Flights</h1>
      <div className="current-bookings">
        {bookings}
      </div>
    </>
  );
}

export default CurrentBookings;