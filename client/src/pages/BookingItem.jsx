import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import ProfileNav from "../components/Profilenav";

function BookingItem(){
  return(
    <div>
      <ProfileNav/>
      <Header />
      <Item />
    </div>
  );
}

export default BookingItem;