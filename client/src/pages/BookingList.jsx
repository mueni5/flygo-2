import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import ProfileNav from "../components/Profilenav";


function BookingList(){
  return(
    <div>
      <ProfileNav/>
      <Header />
      <List />
    </div>
  );
}


export default BookingList;