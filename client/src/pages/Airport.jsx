import React from "react";
import Header from "../components/Header";
import AirportList from "../components/AirportList";
import ProfileNav from "../components/Profilenav";
import Footer from "../components/Footer";
import "./Airport.css";

function Airport(){
  return(
    <div className="airport">
      <ProfileNav/>
      <Header />
      <AirportList />
      <Footer />
    </div>
  );
}

export default Airport;