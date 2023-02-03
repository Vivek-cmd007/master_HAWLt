import React from 'react'
import './style-main.css'

export const Contactform = () => {
  return (
    <div>
        <div className='container'><br /><br />
            <div>
                <p class="h1"><strong>Love to hear from you, <br /> Get in touch👋</strong></p>
            </div> <br />
        
        <div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <button type="button" id='contact-form-but' className="btn btn-dark">Done</button>
        </div><br /><br />
    </div>
  )
}
