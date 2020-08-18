import React,{useEffect}from 'react';
import "./geolocation.scss";
import axios from "axios";


function Geolocation() {
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Lat", position.coords.latitude);
      console.log("Long", position.coords.longitude);
       console.log("lang",navigator.language);

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





