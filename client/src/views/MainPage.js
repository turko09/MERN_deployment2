import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';


const MainPage =(props)=>{

    const {anyV,anyT} = useParams();
    
 return(
     <>
        <h1>{anyV}</h1>
        <h1>{anyT}</h1>
        <Contact/>
        <About/>
     </>
        )
}
export default MainPage;