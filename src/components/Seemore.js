import React from 'react'
import { Link } from 'react-router-dom'
import './style-main.css'

export const Seemore = () => {
  return (
    <div className='container'>
        
        <br />
        <center className='lead-seemore'>
        <h6>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="rgba(0,0,0,0.83)"/></svg>          Explore more... 
          </h6>
        </center>
        <br />
        <br />

        <div className="seemore-container">
            <ul className="seemore-list">
                <li>
                    <h1 className="display-6">Hundrends of stays, unlimited watches & connections, <br /> no hidden charges with <strong>Premimum</strong>.  </h1>
                </li>
                <li>
                    <p className="seemore-para">Now with <strong>Hawlt</strong><span>CARE</span>.</p>
                </li>
                <li>
                    <button type="button" class="btn btn-dark seemore-but-01">
                         <strong>
                            <Link to = '/AllpropMenu'>
                                <span style={{color:"#e83f60"}} className='seemore-sec-but'>See more</span> 
                            </Link>
                        </strong>
                    </button>

                </li>
                </ul> 
            </div>
        </div>
  )
}



{/* <button className=''>
                       
                    </button> */}