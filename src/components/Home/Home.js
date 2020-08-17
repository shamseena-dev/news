import React,{useEffect , useState} from 'react';
import "./home.scss";
import axios from "axios";


function Home() {
  const [data , setData] = useState([]);
  useEffect(()=>{
  	
  	axios.get(`https://gnews.io/api/v3/top-news?&token=${process.env.REACT_APP_GNEWS_API_KEY}`)
    .then(res =>{
            
           if(res.data){
                    console.log("res",res);
                }   
           else{
              console.log("ERROR");
             
                
            } 




  })
},[]);

  return (
    <div className="container">
     
        <h4>Home</h4>


        
    </div>
  );
}

export default Home;

