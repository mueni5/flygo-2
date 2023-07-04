import React from "react";


function Header(){
  return(
    <div style={{backgroundColor:"blue", display:"flex", justifyContent:"center", alignItems:"center", color:"white"}}>
     <div>
      <h1><b>Welcome!</b></h1>
      <p>We are glad you are here! You can view your flight bookings here</p>

      </div>
    </div>
  );
}

export default Header;
