import React,{useEffect}from 'react';
import "./geolocation.scss";


function Geolocation() {
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Lat", position.coords.latitude);
      console.log("Long", position.coords.longitude);
    });
	},[]);
  return (
    <div className="container">
     
        <h4> Geolocation</h4>
        
    </div>
  );
}

export default Geolocation;

