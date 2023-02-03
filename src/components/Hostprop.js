import React from 'react'
import { Link } from 'react-router-dom'
import './style-main.css'


export const Hostprop = () => {
  return (
    <div><br /><br />
        <div className="container">

            <center className='lead-hosting'>
                <h6>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2h-1zM5 13v6h14v-6H5zm-.96-2h15.92l-.6-3H4.64l-.6 3zM6 14h8v3H6v-3zM3 3h18v2H3V3z" fill="rgba(0,0,0,0.86)"/></svg>
                    Hostings 
                </h6>
            </center><br /><br />

            <ul className="seemore-list-host">
                <li>
                    <h1 className="display-6">Earn revenue, Gifts cards from your vacant properties by <br /> <strong>Hawlt</strong><span>HOST</span>.</h1>
                </li>
                <li>
                    <p className="seemore-para">Stunning <strong>free assistance</strong> for hosting your stays.</p>
                </li>
                <li>
                    <Link to = '/HostPropertyStayindex0'>
                        <button className='host-but-01' ><strong>Host</strong></button>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

{/* <ul className="seemore-list">
                        <li>
                            <h1 className="display-6">Host your property.</h1>
                        </li>
                        <li>
                            <p className="seemore-para">If you are interested in hosting your property, you can contact a rental management company to help you manage the rental process. They will help you find tenants, collect rent, maintain the property, and handle any legal issues that may arise. They can also help you set up the appropriate insurance and pricing for your property.</p>
                        </li>
                        <li>
                            <button>Host</button>
                        </li>
                    </ul> */}
