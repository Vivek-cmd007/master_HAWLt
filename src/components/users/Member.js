import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './user.css'

export const Member = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='container'>
        <br />
         <p class="h1"><strong>Hello ! 😃 <br /> </strong> </p>
         <hr />

         {/* grids */}
         <div class="container ">
            <div class="row">
                <div class="col">
                    <p><h4>Avatar : 🫅</h4></p>
                    <p> Username : {user.name}</p>
                    <br />
                    <hr />
                    <br />
                    <p className='lead'><strong>Explore oue stays.✨</strong> </p>
                    <p>Explore our stays which is enriched with diffrent resources and a <br /> friendly and secure environment.</p>
                    
                    <Link to = '/AllpropMenu'>
                        <button className='user-explore-but'>Explore</button>
                    </Link>
                </div>
                <div class="col">
                    
                </div>
             </div>
            </div>
    </div>
  )
}
