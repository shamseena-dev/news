import React,{useEffect,useState,useContext} from 'react';
import "./weather.scss";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";
import {GeolocationContext} from '../../contexts/GeolocationContext';

function Weather() {
	const [data,setData] = useState([]);
  const [geolocation] = useContext(GeolocationContext);
const lat = geolocation.lat;
const lon= geolocation.lon;

	useEffect(()=>{
  	const API_KEY = process.env.REACT_APP_OWM_API_KEY;


       try{

  	axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(res =>{
              


           if(res.data){
                   
                    setData(res.data)

                }   
         


  })

}
catch(error) {
            console.error(error);
        }
},[lat,lon]);

  return (
    <div className="container">
     
       
        {data.length !== 0 ?
        <WeatherCard  data={data} />
           
           : null }
        
    </div>
  );
}

export default Weather;
