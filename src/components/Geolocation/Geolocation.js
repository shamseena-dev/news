import React,{useState, useEffect,useContext}from 'react';
import "./geolocation.scss";
import axios from "axios";
import {GeolocationContext} from '../../contexts/GeolocationContext';
import {LanguageContext} from '../../contexts/LanguageContext';

function Geolocation() {
    const [geolocation,setGeolocation] = useContext(GeolocationContext);
     const [language,setLanguage] = useContext(LanguageContext);
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
     
      const lat = position.coords.latitude ;
      const lon = position.coords.longitude;

       setGeolocation({lat, 
                     lon});
       const lang =navigator.language;
       setLanguage(lang);
      

     
    });
	},[]);


  
  return (
    <div className="">
     
        
        
    </div>
  );
}

export default Geolocation;





