import React,{useEffect,useContext}from 'react';
import "./geolocation.scss";
import axios from "axios";
import {GeolocationContext} from '../../contexts/GeolocationContext';


function Geolocation() {
    const [geolocation,setGeolocation] = useContext(GeolocationContext);
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Lat", position.coords.latitude);
      console.log("Long", position.coords.longitude);
       console.log("lang",navigator.language);
       setGeolocation({lat : position.coords.latitude ,
                      lon: position.coords.longitude})

       {/*
          axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false`).
          then(res=>{

                    console.log(res);
                  })

               */}

    });
	},[]);
  return (
    <div className="">
     
        
        
    </div>
  );
}

export default Geolocation;





