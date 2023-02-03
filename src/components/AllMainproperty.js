import React from 'react'
import { Footer } from './Footersection'
import { NavBar } from './NavBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Propertycard } from './cards/Propertycard'
import {propAPI} from '../components/backend/Main'

export const AllMainproperty = () => {
    //calling the data api.
  const [ propDet, setPropData ] = useState([]);
  const [load, setLoad] = useState(false)

    // useEffect(()=>{
    //     const fetchPromise = fetch("/properties_menu");
    //     fetchPromise.then(response => {
    //         return response.json();
    //         }).then(e => {
    //             setPropData(e);
    //             setLoad(true)
    //             console.log(propDet)
    //     })
    // },[]);

    useEffect(()=>{
        setPropData(propAPI);
    })

    // console.log(propAPI)


  return (
    <div >


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
    </div>
  )
}


//  {Object.entries(propDet).map(([key, value]) => {
//             return (
//                 <div className='all-block-a' >
//                     {
//                 propDet == null ?
//                 <Propertycard/>
//                 :
//                 <Link 
//                     to = '/propDetails' state={{from : propDet[key]}}>
//                     <Propertycard prop1 = {propDet[key]}/>
//                 </Link>
//                 }
//                 </div>
//             )
//         })}
