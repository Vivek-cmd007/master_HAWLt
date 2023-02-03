import './App.css';
import { Component3 } from './components/Component3';
import { Contactform } from './components/Contactform';
import { Footer } from './components/Footersection';
import { Hostprop } from './components/Hostprop';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import { Popularcity } from './components/Popularcity';
import { Seemore } from './components/Seemore';
import { Travelmenu } from './components/Travelmenu';
import {useState, useEffect} from 'react';
import {Mobilelanding} from './mobile-view/Mobilelanding';
// import { Mobilecompo3 } from './mobile-view/Mobilecompo3';
// import { Main } from './components/backend/Main';
// import { Routes, Route } from 'react-router-dom';
// import { Subpage } from './components/Subpage';
import {AllMainproperty} from './components/AllMainproperty'
import { Maintab } from './components/Tabs/Maintab';
import { Landingheading } from './components/Landingheading';



  function useWindowSize(){
    const[size, setSize] = useState(window.innerWidth);
    useEffect(()=>{
      const handleResize = () => {
        setSize(window.innerWidth)
      };
      window.addEventListener("resize", handleResize);
    },[]);
    return size;
}



function Homepage() {
  const myWidth = useWindowSize();
  console.log(myWidth);
  return (
    <div >      
      <Landingheading/>
    </div>
  );
}

export default Homepage;
