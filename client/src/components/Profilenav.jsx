import React from "react";
import {NavLink} from 'react-router-dom'


function ProfileNav(){
  return(
    <div style={{backgroundColor:"blue", display:"flex", alignItems:"center"}}>
     
     <nav>
    
        <div style={{display: "flex", flexWrap: "no-wrap", flexDirection: "row"}}>
            <h5>USERNAME</h5>
            <div style={{marginLeft: '80vw', fontWeight: '900'}}>
              <NavLink to="/"> Home </NavLink>
              <NavLink to="/">Log out</NavLink>
            </div>
        </div>
            
        {/* <div>
            <Link to="/"> Home </Link>
            <Link to="/">Log out</Link>
        </div> */}
     </nav>
    </div>
  );
}

export default ProfileNav;
