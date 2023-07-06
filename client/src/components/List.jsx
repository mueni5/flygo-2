import React, { useEffect, useState } from "react";
import "./List.css";
import {useNavigate} from 'react-router-dom';

const List = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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
                airport: "JKIA"
              },
              {
                id: 2,
                user: "Christine Mbuvi",
                airport: "Moi International Airport"
              },
              {
                id: 3,
                user: "Amos Wanene",
                airport: "Kisumu International Airport"
              },
              {
                id: 4,
                user: "Boniface Mabeche",
                airport: "Eldoret International Airport"
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
   function handleItem(){
    navigate(`/bookinglist/${1}`)
   }

  return (
    <div>
      <h2 className="list-title">Booking List</h2>
      <ul className="booking-list">
        {bookings.map(booking => (
          <li key={booking.id} className="booking-item" onClick={handleItem}>
            <h3 className="booking-user">{booking.user}</h3>
            <p className="booking-airport">{booking.airport}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
