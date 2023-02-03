import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


export const Guest = () => {
    const { loginWithRedirect } = useAuth0(); // for login
  return (
    <div className='container'>
        <br /><br />
         <div className='heading-compo3 container'>
            <p class="h1"><strong>It seems you have't signed in ! <br /> Please login / sign in to continue.🙂</strong></p>
            <p>
                Please log in if you have created account on Hawlt.com or sign up if you have arrived very first time. <br />
                After joining us you can book stays / rooms, can host your property and many more.
            </p>
            <br />
            <button type="button" onClick={() => loginWithRedirect()} class="btn btn-dark">Join in</button>
        </div>
    </div>
  )
}
