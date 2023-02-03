import React from 'react'
import { Propertycard } from './cards/Propertycard'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//property data API
import {propAPI} from './backend/Main'


export const Component3 = () => {


  //calling the data api.;
  const [ propDet, setPropData ] = useState([]);

    // useEffect(()=>{
    //     const fetchPromise = fetch("/properties_menu");
    //     fetchPromise.then(response => {
    //         return response.json();
    //         }).then(e => {
    //             setPropData(e);
    //             console.log(e);
    //     })
    // },[]);

    // if (propDet == null){
    //   console.log("null");
    // }
    // else{
    //   console.log(propDet.property1.name)
    // }

    useEffect(()=>{
      setPropData(propAPI);
    })
    // console.log(propAPI['property);
    

  return (
    <div className='container'><br /><br />
      <div className='heading-compo3'>
        <p class="h1"><strong>Some hand picked stays <br /> For you.😍</strong></p>
      </div><br />
    <div className=" container text-center compo3-mob-view">
      <div className="row">
        <div className="col">
          
          {propDet == null ?
          <Propertycard/>
          :
          <Link
            to = '/propDetails' state={{from : propDet.property1}} >
            <Propertycard prop1 = {propDet.property1}/>
          </Link>
          }
          
        </div>
        <div className="col">
          {propDet == null ?
          <Propertycard/>
          :
          <Link 
            to = '/propDetails' state={{from : propDet.property2}}>
            <Propertycard prop1 = {propDet.property2}/>
          </Link>
          }
        </div>
        <div className="col">
          {propDet == null ?
          <Propertycard/>
          :
          <Link 
            to = '/propDetails' state={{from : propDet.property3}}>
            <Propertycard prop1 = {propDet.property3}/>
          </Link>
          }
        </div>
      </div>
      
      </div>
      {/* second row */}
      <div className="container compo3-mob-view">
      <div className="row">
        <div className="col">
          {propDet == null ?
          <Propertycard/>
          :
          <Link
            to = '/propDetails' state={{from : propDet.property4}}>
            <Propertycard prop1 = {propDet.property4}/>
          </Link>
          }
        </div>
        <div className="col">
          {propDet == null ?
          <Propertycard/>
          :
          <Link 
            to = '/propDetails' state={{from : propDet.property5}}>
            <Propertycard prop1 = {propDet.property5}/>
          </Link>
          }
        </div>
        <div className="col">
          {propDet == null ?
          <Propertycard/>
          :
          <Link
            to = '/propDetails' state={{from : propDet.property6}}>
            <Propertycard prop1 = {propDet.property6}/>
          </Link>
          }
        </div>
      </div>
      </div>
      {/* --- */}
      
    </div>
  )
}
