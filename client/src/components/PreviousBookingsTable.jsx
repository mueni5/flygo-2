import React from 'react';
import PreviousBookingsRow from './PreviousBookingsRow';
import './PreviousBookingsTable.css';

const PreviousBookingsTable = ({ bookings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Price</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Airport</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => 
          <PreviousBookingsRow key={index} {...booking} />
        )}
      </tbody>
    </table>
  );
};

export default PreviousBookingsTable;