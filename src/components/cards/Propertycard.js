import React from 'react'
import { Link } from 'react-router-dom'
import './Stylecard.css'
import { useAuth0 } from "@auth0/auth0-react";

export const Propertycard = (props) => {
   const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="property-card">
        <div class="iphone-8-1">
      <div class="rectangle-div" id="rectangle"></div>
      <img
        class="green-grass-background-footbal-icon"
        alt=""
        src={props.prop1 == null ? "Loading..." : props.prop1.propertyimage}
      />
      <div class="rectangle-div1"></div>
      <div class="prasanth-pg-hostel">{props.prop1 == null ? "Loading..." : props.prop1.name}</div>
      <div class="total-cost-div">Total cost</div>
      <div class="person-div"> / Person</div>
      <div class="div">{props.prop1 == null ? "Loading..." : <>{props.prop1.sharing.single}</>}</div>
      <div class="swamy-vivekananda-rd-opp-cha">
        <p class="swamy-vivekananda-rd">
          {props.prop1 == null ? "Loading..." : <>{props.prop1.address.area}, {props.prop1.address.state}, {props.prop1.address.country}</>}
        </p>
      </div>
      <button class="buttons">
       
        <Link to={isAuthenticated ? '/UserCheckout89Property' : '/GuestRoute98page'} state={{from : props.prop1}} >
          <div class="button-div"><span >Book Now</span> </div>
        </Link>
      </button>  
      
      <input class="buttons-input" type="text" /><img
        class="vuesaxlinearcall-icon"
        alt=""
        src="public/vuesaxlinearcall.svg"
      /><img class="ellipse-icon" alt="" src="public/ellipse-6.svg" /><img
        class="vuesaxlinearheart-icon"
        alt=""
        src="public/vuesaxlinearheart.svg"
      /><img
        class="vuesaxlinearflash-icon"
        alt=""
        src="public/vuesaxlinearflash.svg"
      /><img
        class="vuesaxlinearwifi-icon"
        alt=""
        src="public/vuesaxlinearwifi.svg"
      /><img
        class="vuesaxlinearmonitor-icon"
        alt=""
        src="public/vuesaxlinearmonitor.svg"
      /><img
        class="icons8-star-48-1-2"
        alt=""
        src="public/icons8star48-1-2@2x.png"
      /><img
        class="icons8-star-48-1-3"
        alt=""
        src="public/icons8star48-1-2@2x.png"
      /><img
        class="icons8-star-48-1-4"
        alt=""
        src="public/icons8star48-1-2@2x.png"
      /><img
        class="icons8-star-48-1-5"
        alt=""
        src="public/icons8star48-1-2@2x.png"
      /><img
        class="icons8-star-48-1-6"
        alt=""
        src="public/icons8star48-1-2@2x.png"
      />
      <div class="div1"><p class="swamy-vivekananda-rd">₹</p></div>
    </div>
    </div>
  )
}


//  <img
//         class="green-grass-background-footbal-icon"
//         alt=""
//         src="public/greengrassbackgroundfootballfield-419692262-1@2x.png"
//       />