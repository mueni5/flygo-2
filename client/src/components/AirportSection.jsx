import React from "react";
import AirportCard from "./AirportCard";
import './AirportSection.css';


function AirportSection({id}){
  const airportArrayTest = [{id: 1, image: "./AirportImages/JKIA.jpg", rating: 5, name: "JKIA"}, 
                            {id: 2, image: "./AirportImages/Eldoret2.jpg", rating: 4, name: "Wilson"}, 
                            {id: 3, image: "./AirportImages/Eldoret.jpg", rating: 4.5, name: "Eldoret"},
                            {id: 4, image: "./AirportImages/Moi.jpg", rating: 4.8, name: "Moi International Airport"}]

  const airports = airportArrayTest.map((airport)=>{
      return <AirportCard key={airport.id} id={airport.id} image={airport.image} rating={airport.rating} name={airport.name} />
  });
  
  return(
    <>
      <div id={id} className="airport-section-header">
        <h1>Airports</h1>
      </div>
      <div className="airport-section">  
        {airports}
      </div>
    </> 
  );
}


export default AirportSection;