import React, { useEffect, useState } from "react";
import CSS from "./list.css";

const List = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating fetching bookings from an API
    const fetchBookings = async () => {
      try {
        // Simulated API response
        const response = await new Promise(resolve => {
          setTimeout(() => {
            const bookingsData = [
              {
                id: 1,
                user: "John Doe",
                airport: "Airport ABC"
              },
              {
                id: 2,
                user: "Christine",
                airport: "Airport XYZ"
              },
              {
                id: 3,
                user: "Amos",
                airport: "Airport DEF"
              },
              {
                id: 4,
                user: "Boniface",
                airport: "Airport GHI"
              }
            ];
            resolve(bookingsData);
          }, 1000); // Simulate delay
        });

        setBookings(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1 className="list-heading">This is the list section of the booking list page</h1>
      <h2 className="list-title">Booking List</h2>
      <ul className="booking-list">
        {bookings.map(booking => (
          <li key={booking.id} className="booking-item">
            <h3 className="booking-user">{booking.user}</h3>
            <p className="booking-airport">{booking.airport}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
