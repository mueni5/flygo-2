import React from "react";


function Header(){
  return(
    <div style={{ backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
    <div style={{height: '90px'}}>
      <h1 style={{ marginBottom: "10px" }}><b>Welcome!</b></h1>
      <p>We are glad you are here! You can view your flight bookings here.</p>
    </div>
  </div>
  
  );
}

export default Header;
