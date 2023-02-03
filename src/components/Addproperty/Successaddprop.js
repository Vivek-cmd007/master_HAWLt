import React from 'react'
import { Link } from 'react-router-dom'

export const Successaddprop = () => {
  return (
    <div>
        <center>
            <br />
            <br />
            <h1 style={{fontSize:"100px"}}>✅</h1>
            <p className='Lead'>
                congratulations🎉. Your request have been successfully transfered to our executive.<br/> Our team will get touch with you in soon.  
            </p>
            <br />
            <Link to='/'>
                <button type="button" id='contact-form-but' className="btn btn-dark">Home</button>
            </Link>
        </center>
    </div>
  )
}
