import React,{useEffect,useState} from 'react';
import "./weather.scss";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";


function Weather() {
	const [data,setData] = useState([]);
	const lat =52.507345;
	const lon= 13.413557;
	useEffect(()=>{
  	const API_KEY = process.env.REACT_APP_OWM_API_KEY;


       try{

  	axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d34b836d5269e9bfb170f7f5b7ce9fe8`)
    .then(res =>{
              


           if(res.data){
                    console.log("res",res);
                    setData(res.data)

                }   
           else{
              console.log("Error");
             
                
            } 




  })

}
catch(error) {
            console.error(error);
        }
},[]);

  return (
    <div className="container">
     
       
        {data.length != 0 ?
        <WeatherCard  data={data} />
           
           : null }
        
    </div>
  );
}

export default Weather;
