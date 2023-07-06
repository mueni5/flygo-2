// import React,{useState} from "react";
// import './Landing.css'
// import { useNavigate } from "react-router-dom";

// const Landing = ({id}) => {
//   const [firstName, setName] = useState('');
//   const [lastName, setFrom] = useState('');
//   const [destination, setDestination] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const navigate= useNavigate();


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform search or booking logic here
//     // You can use the form data (origin, destination, departureDate) to make API requests or handle the data as needed
//     console.log('Submitted!');
//     navigate('/bookinglist')
//   };

//   return (
//     <div id={id} className="form-container">
  
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input
//           type="text"
//           placeholder="Name"
//           value={firstName}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Origin
//         <input
//           type="text"
//           placeholder="From"
//           value={lastName}
//           onChange={(e) => setFrom(e.target.value)}
//         />
//       </label>

//       <label>
//         Destination
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//       </label>
//       <label>
//         Depature Date
//         <input
//           type="date"
//           value={departureDate}
//           onChange={(e) => setDepartureDate(e.target.value)}
//         />
//       </label>

//       <label>
//         Return Date
//         <input
//           type="date"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//         />
//       </label>

//       <button type="submit" onSubmit={handleSubmit}>Submit</button>
//     </form>
//     </div>
//   );
// };

// export default Landing;



import React, { useState } from "react";
import './Landing.css'
import { useNavigate } from "react-router-dom";

const Landing = ({ id }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search or booking logic here
    // You can use the form data (origin, destination, date, flightClass) to make API requests or handle the data as needed
    console.log('Submitted!');
    navigate('/bookinglist');
  };

  return (
    <div id={id} className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Origin
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>

        <label>
          Destination
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Class
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
          >
            <option value="">Any</option>
            <option value="First Class">First Class</option>
            <option value="Business Class">Business Class</option>
            <option value="Economy Class">Economy Class</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Landing;
