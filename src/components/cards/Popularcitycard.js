import React from 'react'
import './Stylecard.css'

export const Popularcitycard = (props) => {
  return (
    <div className='card-one-main'>
       <div class="card" >
            <img src={props.city.imgt} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h6 style={{color:"black"}}>{props.city.name}</h6>
                <p style={{color:"black"}} class="card-text">{props.city.stay} Stays</p>
            </div>
        </div>
    </div>
  )
}
