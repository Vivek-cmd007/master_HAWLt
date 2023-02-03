import React from 'react'
import { Travelcard } from './cards/Travelcard'

export const Travelmenu = () => {
    const travelMenu = [
        {
            'tName' : 'Malls',
            'desc' : 'Explore variety of malls',
            'img' : 'images/travelPhoto/picMall.jpg'
        },
        {
            'tName' : 'Hills stations',
            'desc' : 'Explore stations and have a tour with us.',
            'img' : 'images/travelPhoto/picHill.jpg'
        },
        {
            'tName' : 'Waterfall',
            'desc' : 'Explore our water falls and enjoy.',
            'img' : 'images/travelPhoto/pic2W.jpg'
        },
        {
            'tName' : 'Trekking',
            'desc' : 'Explore variety of mountaines for climbing.',
            'img' : 'images/travelPhoto/pic1Treek.jpg'
        },
        {
            'tName' : 'Beach',
            'desc' : 'Explore variety of beaches.',
            'img' : 'images/travelPhoto/picB.jpg'
        },
        {
            'tName' : 'Temples',
            'desc' : 'Explore our holy places.',
            'img' : 'images/travelPhoto/picT.jpg'
        }
        
    ]
  return (
    <div className='main-travelmenu-01'>
        <br /><br />
        <div className='container'>
            <p class="h1"><strong>Travel around the Globe👋</strong></p><br />
        </div>
        {/* <Travelcard/> */}
        <div class="container">
            <div class="row">
                <div class="col">
                    <Travelcard tObj={travelMenu[0]}/>
                </div>
                <div class="col">
                    <Travelcard tObj={travelMenu[1]}/>
                </div>
                <div class="col">
                    <Travelcard tObj={travelMenu[2]}/>
                </div>
            </div>
        </div>
        <br />
        {/* -- */}
        <div class="container ">
            <div class="row">
                <div class="col">
                    <Travelcard tObj={travelMenu[3]}/>
                </div>
                <div class="col">
                    <Travelcard tObj={travelMenu[4]}/>
                </div>
                <div class="col">
                    <Travelcard tObj={travelMenu[5]}/>
                </div>
            </div>
        </div>
    </div>
  )
}
