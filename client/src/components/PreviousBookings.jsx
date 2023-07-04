import React from "react";
import PreviousBookingsTable from "./PreviousBookingsTable";
import './PreviousBookings.css';

function PreviousBookings(){
  const bookings = [{id: 1, date: "5/6/2023", from: "Kisumu", to: "Mombasa", price: 8000, departureTime: "12:00", arrivalTime: "13:00", airport: "Kisumu International airport"},
                    {id: 2, date: "7/6/2023", from: "Mombasa", to: "Nairobi", price: 10000, departureTime: "11:00", arrivalTime: "12:00", airport: "Moi International airport"}
                   ];
  
  return(
    <div className="previous-bookings">
      <PreviousBookingsTable bookings={bookings} />
    </div>
  );
}

export default PreviousBookings;