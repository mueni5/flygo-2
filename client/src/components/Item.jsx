import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Item.css';

const Item = () => {
  const [flight, setFlight] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulating fetching booking details from an API
    fetch(`/bookinglist/${id}`)
    .then((response) => response.json())
    .then((data) => setFlight(data) )
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
        setFlight(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [id]);

  if (!flight) {
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
      <p>Date: {flight.date}</p>
      <p>From: {flight.from}</p>
      <p>To: {flight.to}</p>
      <p>Price: {flight.price}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Arrival Time: {flight.arrivalTime}</p>
      <p>Airport: {flight.airport}</p>
      <p>Class: {flight.class}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default Item;
