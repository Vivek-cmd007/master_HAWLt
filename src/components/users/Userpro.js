import React from 'react'
import { NavBar } from '../NavBar'
import { Guest } from './Guest';
import { Member } from './Member';
import { useAuth0 } from "@auth0/auth0-react";


export const Userpro = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
        <NavBar/>
        {
            isAuthenticated ?
            <Member/>
            :
            <Guest/>
        }
    </div>
  )
}
