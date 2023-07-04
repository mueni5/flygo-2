import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Item.css';

const Item = () => {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulating fetching booking details from an API
    const fetchBooking = async () => {
      try {
        // Simulated API response
        const response = await new Promise(resolve => {
          setTimeout(() => {
            const bookingsData = {
              1: {
                date: "2023-12-25",
                from: "New York",
                to: "San Francisco",
                price: "$300",
                departureTime: "08:00",
                arrivalTime: "11:00",
                airport: "JFK",
                class: "Economy"
              },
              // ...Other bookings
            };
            resolve(bookingsData[id]);
          }, 1000); // Simulate delay
        });
        setBooking(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1);
  }

  const handleBook = () => {
    navigate("/profile");
  }

  return (
    <div className="item">
      <h2>Booking Details</h2>
      <p>Date: {booking.date}</p>
      <p>From: {booking.from}</p>
      <p>To: {booking.to}</p>
      <p>Price: {booking.price}</p>
      <p>Departure Time: {booking.departureTime}</p>
      <p>Arrival Time: {booking.arrivalTime}</p>
      <p>Airport: {booking.airport}</p>
      <p>Class: {booking.class}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default Item;
