import React from 'react'
import { Link } from 'react-router-dom'
import './style-main.css'
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
  const { loginWithRedirect } = useAuth0(); // for login
  const { logout } = useAuth0(); // for log out
  const { user, isAuthenticated, isLoading } = useAuth0();

   
  return (
    <div className='my-nav-02'>
        <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://hawlt-main-site.web.app/">Hawlt</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to = '/'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" fill="rgba(0,0,0,0.91)"/></svg>
              <span style={{color:"black"}}>Home</span>
            </Link>
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" fill="rgba(0,0,0,0.84)"/></svg>
            Bookings
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to = '/AllpropMenu'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" fill="rgba(0,0,0,0.83)"/></svg>
              <span style={{color:"black"}}>Menu</span> 
            </Link> 
          </a>
        </li> */}
      </ul>
      <div className="d-flex" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z" fill="rgba(0,0,0,0.89)"/></svg>
          </a>
        </li> */}

        <li className="nav-item user-logo">
          <Link to = '/UserProfile'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="rgba(0,0,0,0.89)"/></svg>
          </Link>
        </li>
        {
          isAuthenticated ?
          <li>
            <button type="button" onClick={() => logout({ returnTo: window.location.origin })} class="btn btn-dark">Log out</button>
          </li>
          :
          <li className="nav-item">
            <button type="button" onClick={() => loginWithRedirect()} class="btn btn-dark">Join in</button>
          </li>         
        }
        
       
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
