import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AirportList.css';
import { useNavigate, useParams } from "react-router-dom";


function AirportList() {
  const params = useParams();
  const [airportFlights, setAirportFlights] = useState([]);
  const navigate = useNavigate();

  const url = `/airport_flights?airport_id=${params.id}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAirportFlights(data))
      .catch((error) => alert(error));
  }, [url]);

  const flights = airportFlights.map((airportFlight) => {
    return {
      id: airportFlight.id,
      origin: airportFlight.origin,
      destination: airportFlight.destination,
      date: airportFlight.date,
      departureTime: airportFlight.departureTime,
      arrivalTime: airportFlight.arrivalTime,
      flightClass: airportFlight.flight_class,
    }
  })


  function handleBook(id){
    navigate(`/bookinglist/${id}`);
  }
  
 
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Jomo Kenyatta International Airport</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Depature Time</th>
                    <th>Arrival Time</th>
                    <th>Flight Class</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={flight.id} onClick={() => handleBook(flight.id)}>
                      <td>{index + 1}</td>
                      <td>{flight.origin}</td>
                      <td>{flight.destination}</td>
                      <td>{flight.date}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.flightClass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default AirportList;


 // const flights = [
  //   { id: 1, airline: 'Emirates', destination: 'Mumbai', time: '10:00 AM' },
  //   { id: 2, airline: 'Jambo Jet', destination: 'Kisumu', time: '12:00 PM' },
  //   { id: 3, airline: 'Kenya Airways', destination: 'Tokyo', time: '02:00 PM' },
  //   { id: 4, airline: 'Condor', destination: 'Berlin', time: '04:00 PM' },
  // ];