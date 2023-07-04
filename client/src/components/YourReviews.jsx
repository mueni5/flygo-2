// import React from "react";


// function YourReviews(){
//   return(
//     <div>
//       <h1>This is the reviews list of the profile page</h1>
//     </div>
//   );
// }

// export default YourReviews;



// import React from 'react';
// import StarRatings from 'react-star-ratings';

// const reviewsData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     comment: 'Great product! Highly recommended.',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     comment: 'Average quality. Could be better.',
//     rating: 3
//   },
//   {
//     id: 3,
//     name: 'Mark Johnson',
//     comment: 'Terrible experience. Do not buy!',
//     rating: 1
//   }
// ];
// const ReviewCard = ({ review }) => {
//   return (
//     <div className="card">
//       <h3>{review.name}</h3>
//       <p>{review.comment}</p>
//       <StarRatings
//           rating={parseFloat(review.rating)}
//           starDimension="20px"
//           starSpacing="2px"
//           starRatedColor="gold"
//       />
//     </div>
//   );
// };
// const YourReviews = () => {
//   return (
//     <div>
//       <h2>Product Reviews</h2>
//       <div className="card-container">
//         {reviewsData.map(review => (
//           <ReviewCard key={review.id} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default YourReviews;


import React from 'react';
import StarRatings from 'react-star-ratings';
import "./YourReviews.css";

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Great product! Highly recommended.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Average quality. Could be better.',
    rating: 3
  },
  {
    id: 3,
    name: 'Mark Johnson',
    comment: 'Terrible experience. Do not buy!',
    rating: 1
  }
];
const ReviewCard = ({ review, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{review.name}</h3>
      <p>{review.comment}</p>
      <StarRatings
          rating={parseFloat(review.rating)}
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="gold"
      />
      <div className="button-container">
        <button onClick={() => onEdit(review.id)}>Edit</button>
        <button onClick={() => onDelete(review.id)}>Delete</button>
      </div>
    </div>
  );
};
const YourReviews = () => {
  const handleDelete = (reviewId) => {
    // Delete logic here
    console.log(`Delete review with id: ${reviewId}`);
  };
  const handleEdit = (reviewId) => {
    // Edit logic here
    console.log(`Edit review with id: ${reviewId}`);
  };
  return (
    <>
      <div className='header-card-container'>
        <h2>Flight Reviews</h2>
      </div>
      <div className="card-container">
        {reviewsData.map(review => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};
export default YourReviews;
