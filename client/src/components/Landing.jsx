import React, {useState} from "react";

const Landing = ({id}) => {
  const imageStyle = {
    width: "100%", 
    height: "700px", 
    // backgroundImage: "./LandingImg/landingimg.png", 
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
   
  };

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search or booking logic here
    // You can use the form data (origin, destination, departureDate) to make API requests or handle the data as needed
    
    // Reset form fields
    setOrigin('');
    setDestination('');
    setDepartureDate('');
  };
  return (
    <div id={id} className="form-container">
      {/* <img src="./LandingImg/landingimg.png" alt="Airplane" style ={imageStyle} /> */}
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">First name</label>
          <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">City</label>
          <input type="text" class="form-control" id="validationCustom03" required />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">State</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="validationCustom05" required />
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <br />
        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
        <br />
        <button className="search-flights"
      type="submit">Search Flights</button>
      </form> */}
    </div>
  );
};

export default Landing;