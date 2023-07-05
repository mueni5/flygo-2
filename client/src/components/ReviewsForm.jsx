

import React, { useState } from 'react';
import './ReviewForm.css'

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
      <form className="form" onSubmit={handleFormSubmit}>
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