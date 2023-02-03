import React from 'react'
import { Link } from 'react-router-dom'
import './style-main.css'
import { useAuth0 } from "@auth0/auth0-react";
export const Optionstab = () => {
  const { loginWithRedirect } = useAuth0(); // for login
  const { logout } = useAuth0(); // for log out
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
       <a className="navbar-brand" href="https://hawlt-main-site.web.app/"><b>HAWLT</b></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button><div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      
        <ul class="navbar-nav">
        <li class="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
            <Link to = '/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" fill="rgba(0,0,0,0.91)"/></svg>
              <span style={{color:"black"}}>Home</span>
            </Link>
          </a>
        </li>
      <li class="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" fill="rgba(0,0,0,0.84)"/></svg>
            Bookings
          </a>
      </li>
      <li class="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
      <img src="https://img.icons8.com/windows/22/null/bedroom.png" margin="0 0 30 30" />
            Private Rooms
          </a>
      </li>
      <li class="nav-item">
        <Link to='/AllpropMenu' class="nav-link active">Budget</Link>
      </li>
      <li class="nav-item">
        <Link to='/AllpropMenu' class="nav-link active">Mansions</Link>
      </li>
    </ul>
  </div>
    
   {/*  <ul class="navbar-nav float-start me-auto">
        <li class="nav-item d-none d-lg-block">
          <a class="nav-link sidebartoggler waves-effect waves-light"
            href="#"
            data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a>
        </li>
      </ul>
      <ul class="navbar-nav float-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="text-white"></span> <img src="#" alt="user" class="rounded-circle" width="31"/>
          </a>
          <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#"><i class="mdi mdi-account me-1 ms-1"></i> My Profile</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"
              ><i class="mdi mdi-settings me-1 ms-1"></i> Account Setting</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="logout"
              ><i class="fa fa-power-off me-1 ms-1"></i> Logout</a
            >
            <div class="dropdown-divider"></div>
            <div class="ps-4 p-10">
              <a
                href="#"
                class="btn btn-sm btn-success btn-rounded text-white"
                >View Profile</a
              >
            </div>
          </ul>
        </li> 
       
      </ul> */}
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
  </nav>
  </div>
  )
}
