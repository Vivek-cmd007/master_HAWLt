import React from 'react'
import './mobilestyle.css'

export const Mobilelanding = () => {
  return (
    <div>
      <div className='landing-page-mob'>
        <ul className="list-head" style={{fontSize:"15px", backdropFilter: "blur(4px)"}}>
                <li><h1 className="display-6-mob" style={{fontSize:"20px"}}> <strong>  We are making renting easy and <br/> afordable for everyone.</strong> <br/></h1></li>
                <li>
                  <p className="lead" style={{fontSize:"15px"}}>
                  <strong>
                    We have a strong and trust conneections and network of the property holders who invites renters and our platform help users to host there properties. 
                  </strong>   
                  </p>
                </li>
                <li>
                  <form class="d-flex" role="search" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </li>
              </ul> 
      </div>
    </div>
  )
}
