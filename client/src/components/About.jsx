import React from "react";
import "./AboutStyle.css";
import { useNavigate } from "react-router-dom";


function About({id}){
  const image = "./AboutImg/aeroplane.jpg";
  const navigate = useNavigate();

  function handleRegisterNow(){
    navigate("/signup");
  }

  return(
    <div id={id} className="about-section">
    <div className="image-container">
      <img src={image} alt="About" />
    </div>
    <div className="content-container">
      <h2>Travel Any Corner of The World With Us</h2>
      <p>
      Embark on a remarkable journey and explore 
      the wonders of our diverse planet with 
      our exceptional travel services. At FlyGo," we 
      understand your deep-rooted desire to experience 
      the captivating beauty and rich cultural tapestry 
      found in every corner of this globe. Whether you dream 
      of standing in awe of the towering Himalayas, feeling 
      the warm sand between your toes on pristine Caribbean 
      beaches, or wandering through the enchanting streets
       of ancient European cities, we are here to fulfill
        your wanderlust. Join us as we unlock the hidden gems of 
         this magnificent world, one breathtaking destination
          at a time. Let's make your dreams come true and create 
          a travel experience that will surpass your wildest imagination.
      </p>
      <div className="button-container">
        <button className="contact-button" onClick={handleRegisterNow}>Register Now</button>
      </div>
    </div>
  </div>
  );
}


export default About;