import React from 'react'
import { Propertycard } from '../cards/Propertycard'
import { Footer } from '../Footersection'
import { NavBar } from '../NavBar'
import './checkout.css'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'


export const Checkout = (props) => {
    const location = useLocation();
    const [date, setDate] = useState("--"); //for date input
    // useEffect(()=>{
    //     console.log(location);
    // },[])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col ">
                    <div className='date-picker'>
                        <label>Please select your Date of arrival.</label><br />
                        <input type="date" id="birthday" name="birthday" onChange={e => setDate(e.target.value)}></input>
                    </div>
                    <div className='bill-sum'>
                        <h1 className="display-6">Summary</h1>
                        <p>Packet : Full package 100+ channels <br /> Hawlt verified ✅ <br /> Duration : 1m</p>
                        <div className="row">
                            <div className="col">
                                Date of arrival
                                </div>
                                <div className="col">
                                    {date}
                                </div>
                            </div>
                        <hr />
                        <div>
                            <div className="">
                                <div className="row">
                                    <div className="col">
                                        Booking charge
                                    </div>
                                    <div className="col">
                                        ₹ 500
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col">
                                        Discount for points
                                    </div>
                                    <div className="col">
                                        ₹ 0.00
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col">
                                        Gift card discount
                                    </div>
                                    <div className="col">
                                        ₹ 0.00
                                    </div>
                                 </div>
                                 <hr />
                                 <div className="row">
                                    <div className="col">
                                        Grand Total
                                    </div>
                                    <div className="col">
                                        ₹ 500
                                    </div>
                                 </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col">
                    <Propertycard prop1 = {location.state.from}/>
                </div>
           </div>

           <div className='main-checkout-but'>
            <button className='checkout-but'>Check out!</button>
           </div>
           

        </div>
        <Footer/>
        </div>
  )
}
