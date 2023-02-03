import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Footersection'
import { NavBar } from '../NavBar'

export const Addpropform = () => {
  return (
    <div>
        {/* navnar */}
        <NavBar/>

        <br />
        <br />

        <div className='container'>
            
            {/* heading ot title of the page */}
             <div className=''>
                <p class="h1"><strong>Host your property on Hawlt <br /> Get access to over 20+ features.🙂</strong></p>
                <p>
                    Host your property on Hawlt and join the community of over 10000+ properties holder. <br />
                    Your property will be under the supported and will be powered by <h5><strong>Hawlt</strong><span style={{color:"red"}}>COVER</span></h5>
                </p>
            </div>

            <br />
            <hr />
            <br />

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Link to='/added-prop-si=uuess405'>
                <button type="button" id='contact-form-but' className="btn btn-dark">Done</button>
            </Link>
        </div>
        <br />
        <br />
        
        {/* footer */}
        <Footer/>
    </div>
  )
}
