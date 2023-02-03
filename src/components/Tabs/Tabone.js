import React from 'react'
import { LandingPage } from '../LandingPage'
import { NavBar } from '../NavBar'
import { Maintab } from './Maintab'
import { propAPITab1 } from '../backend/MaindataTab'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Propertycard } from '../cards/Propertycard'
import { AllMainproperty } from '../AllMainproperty'
import { Seemore } from '../Seemore'
import { Travelmenu } from '../Travelmenu'
import { Hostprop } from '../Hostprop'
import { Contactform } from '../Contactform'
import { Footer } from '../Footersection'


export const Tabone = () => {
    const [ propDet, setPropData ] = useState([]);
     useEffect(()=>{
        setPropData(propAPITab1);
    })
  return (
    <div>
        <NavBar/>
        <LandingPage/>
        <Maintab/>

         <div class="container text-center all-prop-main">
                <div class="row">
                     {Object.entries(propDet).map(([key, value]) => {
                        return (
                            <div className="col" >
                                {
                                    propDet == null ?
                                    <Propertycard/>
                                    :
                                    <Link
                                        to = '/propDetails' state={{from : propDet[key]}}>
                                        <Propertycard prop1 = {propDet[key]}/>
                                    </Link>
                                }
                          
                            </div>
                        )
                    })}
               </div>
            </div>
                
        
      {/* <AllMainproperty/> */}
      
     
     {/* Popular cities in the list */}
      {/* <center>
        <div className="main-app-prop-ci"><Popularcity/></div>
      </center> */}

      {/* All the property hosted is listed here total 6 here. */}
      {/* <div className='compo3-mob'>
        <Component3/>
      </div> */}
      

      {/* Seemore banner */}
      <Seemore/><br />

      {/* Travel guide with optioons like malls and beaches. */}
      <Travelmenu/><br />

      {/* Hosting property banner is here. */}
      <Hostprop/>

      {/* contacting form */}
      <Contactform/>

      {/* Footer section */}
      <Footer/>


        
        </div>
  )
}
