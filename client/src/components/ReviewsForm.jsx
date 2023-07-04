import React from "react"
 
 function ReviewsForm() {
   return (
    <div>
    <div class="col-md-6">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="col-md-6">
    <label for="exampleFormControlTextarea1" class="form-label"> textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div >
  {/* style = 
{
  color: orange;
} */}

<h2>Star Rating</h2>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>


</div>

<div>
  <button>submit</button>
  </div>
  </div>
   )
 }
 
 export default ReviewsForm
 
