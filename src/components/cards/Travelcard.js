import React from 'react'
import './Stylecard.css'

export const Travelcard = (props) => {
  return (
    <div className='travel-card'>
        <div class="card text-bg-dark">
            <img src={props.tObj.img} class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h5 class="card-title">{props.tObj.tName}</h5>
                <p class="card-text">{props.tObj.desc}</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
  )
}
