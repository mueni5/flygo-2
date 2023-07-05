// import "./Reviews.css";
// const Reviews = ({id}) => {
//   return (
//     <div>
//       <section>
//         <div id={id} className="container ">
//           <h1 className="section-header">
//             Testimonials <span>This is what our customers say</span>
//           </h1>
//           <div className="testimonials">
//             <div id="carouselExample" className="carousel slide">
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <div className="single-item rounded-4">
//                     <div className="row">
//                       <div className="col-md-5">
//                         <div className="profile">
//                           <div className="image-area">
//                             <img
//                               src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                               alt="profile"
//                             />
//                           </div>
//                           <div className="bio">
//                             <h2>Amos Wanene</h2>
//                             <h4>Web developer</h4>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="content">
//                           <p>
//                             <span>
//                               <i className="bi bi-quote"></i>
//                             </span>
//                             A product that has reviews is more likable to be
//                             sold than a product that doesn't have because people
//                             tend to copy other people. If they have to choose
//                             between two similar products at the same prices, in
//                             most cases they will choose the product that has
//                             more good reviews.
//                           </p>
//                           <p className="socials">
//                             <i className="bi bi-instagram"></i>
//                             <i className="bi bi-messenger"></i>
//                             <i className="bi bi-twitter"></i>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="single-item">
//                     <div className="row">
//                       <div className="col-md-5">
//                         <div className="profile">
//                           <div className="image-area">
//                             <img
//                               src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                               alt="profile"
//                             />
//                           </div>
//                           <div className="bio">
//                             <h2>Amos Wanene</h2>
//                             <h4>Web developer</h4>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="content">
//                           <p>
//                             <span>
//                               <i className="bi bi-quote"></i>
//                             </span>
//                             A product that has reviews is more likable to be
//                             sold than a product that doesn't have because people
//                             tend to copy other people. If they have to choose
//                             between two similar products at the same prices, in
//                             most cases they will choose the product that has
//                             more good reviews.
//                           </p>
//                           <p className="socials">
//                             <i className="bi bi-instagram"></i>
//                             <i className="bi bi-messenger"></i>
//                             <i className="bi bi-twitter"></i>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="single-item">
//                     <div className="row">
//                       <div className="col-md-5">
//                         <div className="profile">
//                           <div className="image-area">
//                             <img
//                               src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                               alt="profile"
//                             />
//                           </div>
//                           <div className="bio">
//                             <h2>Amos Wanene</h2>
//                             <h4>Web developer</h4>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="content">
//                           <p>
//                             <span>
//                               <i className="bi bi-quote"></i>
//                             </span>
//                             A product that has reviews is more likable to be
//                             sold than a product that doesn't have because people
//                             tend to copy other people. If they have to choose
//                             between two similar products at the same prices, in
//                             most cases they will choose the product that has
//                             more good reviews.
//                           </p>
//                           <p className="socials">
//                             <i className="bi bi-instagram"></i>
//                             <i className="bi bi-messenger"></i>
//                             <i className="bi bi-twitter"></i>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Reviews;





import React, { useState, useEffect } from 'react';

const Testimonial = ({ imageSrc, name, airport, content, socials }) => {

  return (
    <div className="single-item rounded-4">
      <div className="row">
        <div className="col-md-5">
          <div className="profile">
            <div className="image-area">
              <img src={imageSrc} alt="profile" />
            </div>
            <div className="bio">
              <h2>{name}</h2>
              <h4>{airport}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="content">
            <p>
              <span>
                <i className="bi bi-quote"></i>
              </span>
              {content}
            </p>
            <p className="socials">
              {socials.map((social, index) => (
                <i key={index} className={`bi bi-${social}`}></i>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = ({ id }) => {

  const [reviews, setReviews] = useState([]);
  const iconImage = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
  
  useEffect(() => {
    fetch('/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch((error) => alert(error.message))
  }, []);


  const testimonials = reviews.map((review) => {
    // return <Testimonial key={review.id} imageSrc={iconImage} name={review.user_name} airport={review.airport_name} content={review.rating} socials={['instagram', 'messenger', 'twitter']}/>
    return {
      imageSrc: iconImage,
      name: review.user_name,
      airport: review.airport_name,
      content: review.review,
      socials: ['instagram', 'messenger', 'twitter'],
    }
  });


  return (
    <div>
      <section>
        <div id={id} className="container">
          <h1 className="section-header">
            Reviews <span>This is what other customers say</span>
          </h1>
          <div className="testimonials">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <Testimonial {...testimonial} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
