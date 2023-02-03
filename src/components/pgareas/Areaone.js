import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Propertycard } from '../cards/Propertycard';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { Footer } from '../Footersection';

//calling the property API
import { propAPI } from '../backend/Main';

export const Areaone = () => {
    const [areaName, setAreaName] = useState();
    const location = useLocation();
    const [ propDet, setPropData ] = useState([]);
    const [load, setLoad] = useState(false)

    // useEffect(()=>{
    //     setAreaName(location.state.from.area)
    //     const fetchPromise = fetch("/properties_menu");
    //     fetchPromise.then(response => {
    //         return response.json();
    //         }).then(e => {
    //             setPropData(e);
    //             setLoad(true)
    //             // console.log(e)
    //     })
    //     console.log(location.state.from.area)
    // },[])

    useEffect(()=>{
        setAreaName(location.state.from.area)
        setPropData(propAPI);
    })

       
  return (
    <div>
        <NavBar/>
        <div class="container">
            <div class="row">

        
        {/* LOADING SECTION */}

        {/* <center>
        <div className='loader-allproperty'>
            {
                load ? null : 
                <>
                <h3>Loading...</h3>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </>
            }
        </div>
        </center> */}

        
        {/* empty page */}
        {
            (areaName == null) ?
            <>
                <div className='heading-areaone container' style={{marginTop:"100px", marginBottom:"100px"}}>
                    <p class="h1"><strong>Soory ! <br /> Zero #Stays found. 😣</strong></p>
                    <p>No property found. Please refresh or come back soon. Thank you for your patience.</p>
                </div>
            </>
            :
            null
        }
        
        <div className='areaone-cards'>

        {
            Object.entries(propDet).filter(([key, value]) => {
                const temp = value.address.area
                if(temp.includes(areaName) == true){
                    return true
                }
                
            })
            .map(([key, value]) => 
                {
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
                })
        
        }
         </div>
         </div>
            </div>
            <Footer/>
    </div>
  )
}
