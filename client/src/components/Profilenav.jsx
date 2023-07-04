import React from "react";
import {Link} from 'react-router-dom'


function ProfileNav(){
  return(
    <div style={{backgroundColor:"blue", display:"flex", alignItems:"center", color:"white"}}>
     
     <nav>
    
        <div>
            <h5>USERNAME</h5>
            </div>
            
            <div>
            <Link to="/"> Home </Link>
            <Link to="/logout">Log out</Link>
        
        </div>
     </nav>
    </div>
  );
}

export default ProfileNav;
