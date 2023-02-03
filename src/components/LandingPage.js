import React from 'react'
import './assests/css/styleLanding.css'

export const LandingPage = () => {
  return (
    <div className='Landingpage-main'>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-head">
                <li><h1 className="display-6">We are making renting easy and <br/> afordable for everyone<br/></h1></li>
                <li>
                  <p className="lead">
                    We have a strong and trust conneections and network of the property holders who invites renters. 
                  </p>
                  <button className='landing_but1'>Bookings</button> 
                  <button className='landing_but1'>See all</button>
                  <button className='landing_but1'>Host</button>
                </li>
                <li>
                 
                </li>
              </ul> 
            </div>
            <div className="col landing-search">
               <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z" fill="rgba(0,0,0,0.74)"/></svg>
                  Hawlt
                   
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z" fill="rgba(0,0,0,0.74)"/></svg>
                  BeYou

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z" fill="rgba(0,0,0,0.74)"/></svg>
                  HawltUser
                  </p>
            </div>
           </div>
          </div> 
      </div>
    </div>
  )
}


{/* <div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>  */}


//  <ul>
//           <li><h1 class="display-6">Display 6</h1></li>
//           <li>
//             <p class="lead">
//               This is a lead paragraph. It stands out from regular paragraphs.
//             </p>
//           </li>
//         </ul> 