

import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewsForm = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log("Message:", message);
    console.log("Rating:", rating);
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "purple" }}>Add Review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "200%",
              height: "200px",
              resize: "none",
              marginBottom: "10px",
            }}
          ></textarea>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          /><br />
          <input
            type="submit"
            value="Submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewsForm;