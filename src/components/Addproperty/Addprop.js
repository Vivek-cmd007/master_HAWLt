import React from 'react'
import { Guest } from '../users/Guest';
import { useAuth0 } from "@auth0/auth0-react";
import { Addpropform } from './Addpropform';

export const Addprop = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
        {
            isAuthenticated ? 
            <Addpropform/>
            :
            <Guest/>
        }
        {/* <Addpropform/> */}
        
    </div>
  )
}
