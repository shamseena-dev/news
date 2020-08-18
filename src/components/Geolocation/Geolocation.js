import React,{useContext}from 'react';
import "./geolocation.scss";

import {GeolocationContext} from '../../contexts/GeolocationContext';
import {LanguageContext} from '../../contexts/LanguageContext';

function Geolocation() {
    const [geolocation,setGeolocation] = useContext(GeolocationContext);
     const [language,setLanguage] = useContext(LanguageContext);
	
    
		navigator.geolocation.getCurrentPosition(function(position) {
     
      const lat = position.coords.latitude ;
      const lon = position.coords.longitude;

       if(geolocation.lat!== lat || geolocation.lon!==lon){ 
            setGeolocation({lat, 
                     lon});
          }
       const lang =navigator.language;
       const extracted= lang.slice(0, 2);
       if(language!== extracted) {
         setLanguage(extracted);
         }
      

     
    });
  
	


  
  return (
    <div className="">
     
        
        
    </div>
  );
}

export default Geolocation;





