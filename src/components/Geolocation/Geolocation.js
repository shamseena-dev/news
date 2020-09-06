import React,{useContext}from 'react';
import "./geolocation.scss";

import {GeolocationContext} from '../../contexts/GeolocationContext';


function Geolocation() {
    const [geolocation,setGeolocation] = useContext(GeolocationContext);
     
    
    const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

		navigator.geolocation.getCurrentPosition(function(position) {
     
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

       if(geolocation.lat!== lat || geolocation.lon!==lon){ 
            setGeolocation({lat, 
                     lon},options);
          }
       
     
    });
  
  


  
  return (
    <div className="">
     
        
        
    </div>
  );
}

export default Geolocation;





