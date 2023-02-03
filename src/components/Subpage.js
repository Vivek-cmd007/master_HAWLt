import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footersection'
import { useLocation } from "react-router-dom"
import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

export const Subpage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  useEffect(()=>{
    console.log(location);
  },[])
  return (
    <div>
      <div className='subpage-nav'>
        <NavBar/>
      </div>

      <div class="alert alert-primary container" role="alert">
      check it out! 🎉 our best deals <strong><a href="#">here</a></strong>
      </div>
      
      <div className="container text-center">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/prop1.jpeg" className="d-block w-100" alt="img 1"/>
              </div>
              <div className="carousel-item">
                <img src="images/prop1.jpeg" className="d-block w-100" alt="img 2"/>
              </div>
              <div className="carousel-item">
                <img src="images/prop1.jpeg" className="d-block w-100" alt="img 3"/>
              </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='container'>
            <br /><br />

            <h2>{location.state.from.name}</h2>
            <p class="lead">
              <strong>
                {location.state.from.address.area} . {location.state.from.address.state} . {location.state.from.address.state} 
              </strong> 
            </p>
            <p><strong>₹ 12,000</strong> / Person . Whitefield, Bangalore, India</p>
          
            <p>
              {location.state.from.forgender}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2v6.066zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="rgba(0,0,0,0.9)"/></svg>
            </p>
            
            {/* button */}
            <Link to={isAuthenticated ? '/UserCheckout89Property' : '/GuestRoute98page'}>
            <div className="subpage-last-but">
              <button type="button" class="btn btn-dark">Book</button>
            </div>
            </Link>

            <hr />

            <br />

            <h4>Property hosted by Hawlt</h4>
            <p>{location.state.from.floors} Floors . {location.state.from.bedroom} bedrooms . {location.state.from.squarefeet} square feet</p>
            <br />
            <h4>Sharing availability</h4>
            {/* sharing */}
            <div>
              <div>
                <div className="row">
                  <div className="col">
                    Single sharing <strong>₹ {location.state.from.sharing.single}/-</strong>
                  </div>
                  <div className="col">
                    Double sharing <strong>₹ {location.state.from.sharing.double}/-</strong>
                  </div>
                </div>
              </div>
              {/* -- */}<br/>
               <div>
                <div className="row">
                  <div className="col">
                    Triple sharing <strong>₹ {location.state.from.sharing.triple}/-</strong>
                  </div>
                  <div className="col">
                    Multi sharing <strong>₹ {location.state.from.sharing.multi}/-</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* --- */}
            <br />

            <hr />

            <br />

            <h1>🛋️</h1>
            <h5><strong>Well furnished</strong></h5>
            <p>fitted out or decorated with attractive or good quality furniture, carpets</p>
            <br />

            <h1>🛎️</h1>
            <h5><strong>Self check-in</strong> </h5>
            <p>You can check in with the doorman.</p>
            <br />

            <h1>💻</h1>
            <h5><strong>Dedicated workspace</strong> </h5>
            <p>A common area for focused work.</p>

            <br />
            <hr />

            <br />

            <h5><strong>Hawlt</strong><span style={{color:"red"}}>COVER</span></h5>
            <br />
            <p className="halt-cover-p">
              Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble check in.
              <br /><a href="#"><strong><span style={{color:"black"}}><u>Learn more</u></span></strong></a>
            </p>
            <br />

            <hr />

            <br />
            <p>
              Jannat blends the most luxurious backdrop of your fantasy with nature’s incredible marvels to create a tranquil utopia that caters to your comfort here Breakfast is complimentry! This 3Bed pool villa in Nashik is hidden paradise.
              <br /><a href="#"><strong><span style={{color:"black"}}><u>Learn more</u></span></strong></a>
            </p>

            <br />

            <hr />

            <h4 className="head-logo-sub"> <br />
              Facilities provided
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z" fill="rgba(0,0,0,0.9)"/></svg>
            </h4>
            
            <br />

            <div>
              <div class="container text-center">
                <div className="row">
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0 0 12 5C8.191 5 4.694 6.33 1.946 8.553L.69 6.997zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.257 1.556A10.954 10.954 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442l-1.257-1.556zm3.142 3.89A7.967 7.967 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556zm3.142 3.89A2.987 2.987 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334z" fill="rgba(0,0,0,0.92)"/></svg>
                    wifi
                  </div>
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68l-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88-5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z" fill="rgba(0,0,0,0.9)"/></svg>
                    App Support
                  </div>
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(0,0,0,0.89)"/></svg>
                    Parking
                  </div>
                </div>
              </div>
              {/* -- */} <br />
              <div className="container text-center">
                <div className="row">
                  <div className="col">🥪
                    Fooding
                  </div>
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414L15.414 5zM4 7v12h16V7H4z" fill="rgba(0,0,0,0.87)"/></svg>
                    TV
                  </div>
                  <div className="col">🆒
                    Ceiling fan
                  </div>
                </div>
              </div>
              {/* -- */}<br/>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.2zm0 3.159l4 2.8V8.84l-4 2.8v.718zM3 6v12h12V6H3zm2 2h2v2H5V8z" fill="rgba(0,0,0,0.9)"/></svg>
                    Security cameras
                  </div>
                  <div className="col">🩹
                    First aid kit
                  </div>
                  <div className="col">❄️
                    Air conditioning
                  </div>
                </div>
              </div>
            </div>

              <br />
            <hr />
            <br />
            <h4 className="head-logo-sub">
              Location
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(0,0,0,0.84)"/></svg>
            </h4>
            <a href={location.state.from.location}>{location.state.from.location}</a>
            <br /><a href="#"><strong><span style={{color:"black"}}><u>Click here</u></span></strong></a> to see on google map.
            <br /><br />
            <hr />
            <br />

          <h4 className="head-logo-sub">
            Reviews
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM7 10h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" fill="rgba(0,0,0,0.91)"/></svg>
          </h4><br />

           <div className="text-center review-mob-view">
                <div className="row">
                  <div className="col">
                    <div className="card" >
                      <div className="card-body">
                        <h5 className="card-title">{location.state.from.review.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{location.state.from.review.accupation}</h6>
                        <p className="card-text">{location.state.from.review.message}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col">
                     
                  </div> */}
                </div>
              </div>
              <br /><br />
          </div>

          <Link to={isAuthenticated ? '/UserCheckout89Property' : '/GuestRoute98page'}>
          <div className="container subpage-last-but">
            <button type="button" class="btn btn-dark">Book</button>
          </div>
          </Link>

          
          <Footer/>

    </div>
  )
}
