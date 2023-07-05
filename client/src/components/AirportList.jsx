import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function AirportList(){
  const flights = [
    { id: 1, airline: 'Emirates', destination: 'Mumbai', time: '10:00 AM' },
    { id: 2, airline: 'Jambo Jet', destination: 'Kisumu', time: '12:00 PM' },
    { id: 3, airline: 'Kenya Airways', destination: 'Tokyo', time: '02:00 PM' },
    { id: 4, airline: 'Condor', destination: 'Berlin', time: '04:00 PM' },
  ];
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
                    <th>Airline</th>
                    <th>Destination</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map(flight => (
                    <tr key={flight.id}>
                      <td>{flight.id}</td>
                      <td>{flight.airline}</td>
                      <td>{flight.destination}</td>
                      <td>{flight.time}</td>
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