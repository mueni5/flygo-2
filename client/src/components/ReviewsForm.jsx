// import React from "react"
 
//  function ReviewsForm() {
//    return (
//     <div>
//     <div class="col-md-6">
//     <label for="exampleFormControlInput1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//   </div>
//   <div class="col-md-6">
//     <label for="exampleFormControlTextarea1" class="form-label"> textarea</label>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>
//   <div >
//   {/* style = 
// {
//   color: orange;
// } */}

// <h2>Star Rating</h2>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>


// </div>

// <div>
//   <button>submit</button>
//   </div>
//   </div>
//    )
//  }
 
//  export default ReviewsForm
 



import React, { useState } from 'react';

const ReviewsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: ''
  });
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: '',
      comment: '',
      rating: ''
    });
  };
  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ReviewsForm;