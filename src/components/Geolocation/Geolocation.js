import React,{useEffect,useContext}from 'react';
import "./geolocation.scss";

import {GeolocationContext} from '../../contexts/GeolocationContext';
import {LanguageContext} from '../../contexts/LanguageContext';

function Geolocation() {
    const [geolocation,setGeolocation] = useContext(GeolocationContext);
     const [setLanguage] = useContext(LanguageContext);
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
     
      const lat = position.coords.latitude ;
      const lon = position.coords.longitude;

       setGeolocation({lat, 
                     lon});
       const lang =navigator.language;
       const extracted= lang.slice(0, 2);
       setLanguage(extracted);
      

     
    });
	},[geolocation]);


  
  return (
    <div className="">
     
        
        
    </div>
  );
}

export default Geolocation;





