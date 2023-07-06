import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import ProfileNav from "../components/Profilenav";
import Footer from "../components/Footer";


function BookingList(){
  return(
    <div>
      <ProfileNav/>
      <Header />
      <List />
      <Footer />
    </div>
  );
}


export default BookingList;