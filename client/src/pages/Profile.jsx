import React from "react";
import CurrentBookings from "../components/CurrentBookings";
import PreviousBookings from "../components/PreviousBookings";
import ReviewsForm from "../components/ReviewsForm";
import YourReviews from "../components/YourReviews";
import ProfileNav from "../components/Profilenav";

function Profile(){
  return(
    <div>
      <ProfileNav/>
    
      <CurrentBookings />
      <PreviousBookings />
      <YourReviews />
      <ReviewsForm />
    </div>
  );
}

export default Profile;