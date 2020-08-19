import React,{useEffect , useState, useContext} from 'react';
import axios from "axios";
import NewsDisplay from '../NewsDisplay/NewsDisplay';
import {SearchContext} from '../../contexts/SearchContext/SearchContext';
import {LanguageContext} from '../../contexts/LanguageContext';


function FilterNews() {
	
  const [data , setData] = useState([]);
    const [language] = useContext(LanguageContext);
    const [searchData] = useContext(SearchContext);
  useEffect(()=>{
  	const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;


       try{

  	axios.get(`https://gnews.io/api/v3/search?q=${searchData}&max=9&lang=${language}&token=${API_KEY}`)
    .then(res =>{
              


           if(res.data){
                   
                    setData(res.data.articles)


                }   
           else{
              console.log("Error");
             
                
            } 




  })

}
catch(error) {
            console.error(error);
        }
},[searchData,language]);



  return (
  <>
      
        <NewsDisplay data={data} />
        
    </>
  );
}

export default FilterNews;

















 
