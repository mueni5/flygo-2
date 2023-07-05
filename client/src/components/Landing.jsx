import React,{useState} from "react";
import './Landing.css'

const Landing = ({id}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search or booking logic here
    // You can use the form data (origin, destination, departureDate) to make API requests or handle the data as needed
    console.log('Submitted!');
  };

  return (
    <div id={id} className="form-container">
  
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <label>
        Depature Date
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>

      <label>
        Return Date
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Landing;