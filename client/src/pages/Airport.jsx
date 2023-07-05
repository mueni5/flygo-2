import React from "react";
import Header from "../components/Header";
import AirportList from "../components/AirportList";
import ProfileNav from "../components/Profilenav";


function Airport(){
  return(
    <div>
      <ProfileNav/>
      <Header />
      <AirportList />
    </div>
  );
}

export default Airport;