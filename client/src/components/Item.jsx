import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Item.css';

const Item = () => {
  const [flight, setFlight] = useState({});
  const { id } = useParams();
  // const [routeId, setRouteId] = useState(id)
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulating fetching booking details from an API
    fetch(`/flights/${id}`)
    .then((response) => response.json())
    .then((data) => { console.log(data); setFlight(data[0]); console.log(flight);})
    .catch((error) => alert(error.message))
  }, [id]);

  if (!flight) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1);
  }

  const handleBook = () => {

    //Add the booking or use the booking endpoint to add a booking(user - flight relationship)
    // fetch(`/bookings`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user_id: flight.user_id,    ///Change the id here to the user id
    //     flight_id: flight.flight_id,
    //   }),
    // }).then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    //   alert("Booking successful");
    //   navigate("/profile");
    // })
    // .catch((error) => alert(error.message));

    navigate("/profile");
  }
  
  return (
    <div className="item-container">
      <div className="item">
        <h2>Booking Details</h2>
        <p>Date: {flight.date}</p>
        <p>Origin: {flight.origin}</p>
        <p>Destination: {flight.destination}</p>
        <p>Price: {flight.price}</p>
        <p>Departure Time: {flight.departureTime}</p>
        <p>Arrival Time: {flight.arrivalTime}</p>
        <p>Airport: {flight.airport_name}</p>
        <p>Class: {flight.flight_class}</p>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleBook}>Book</button>
      </div>
    </div>
    
  );
}

export default Item;
