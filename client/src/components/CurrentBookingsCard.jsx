import React from 'react';
import './CurrentBookingsCard.css';

const CurrentBookingsCard = ({ date, from, to, price, departureTime, arrivalTime, airport }) => {
  const handleCancelFlight = () => {
    // Implement cancellation logic here
    console.log("Flight cancelled.");
  }

  return (
    <div className="flight-card">
      <h3 className="flight-card__header">Flight Details</h3>
      <div className="flight-card__row">
        <span>Date:</span>
        <span>{date}</span>
      </div>
      <div className="flight-card__row">
        <span>From:</span>
        <span>{from}</span>
      </div>
      <div className="flight-card__row">
        <span>To:</span>
        <span>{to}</span>
      </div>
      <div className="flight-card__row">
        <span>Price:</span>
        <span>{price}</span>
      </div>
      <div className="flight-card__row">
        <span>Departure Time:</span>
        <span>{departureTime}</span>
      </div>
      <div className="flight-card__row">
        <span>Arrival Time:</span>
        <span>{arrivalTime}</span>
      </div>
      <div className="flight-card__row">
        <span>Airport:</span>
        <span>{airport}</span>
      </div>
      <button className="flight-card__cancel" onClick={handleCancelFlight}>Cancel Flight</button>
    </div>
  );
};

export default CurrentBookingsCard;

