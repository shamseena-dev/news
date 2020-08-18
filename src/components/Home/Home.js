import React,{useEffect , useState,useContext,Suspense } from 'react';
import "./home.scss";
import axios from "axios";
import NewsDisplay from "../NewsDisplay/NewsDisplay";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FilterNews from "../FilterNews/FilterNews";
 import {SearchContext} from '../../contexts/SearchContext/SearchContext';
 import {LanguageContext} from '../../contexts/LanguageContext';


const Weather = React.lazy(() => import("../Weather/Weather"));



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

function Home() {
	
  const [data , setData] = useState([]);


  const [setSearchData] = useContext(SearchContext);
  const [filteredNews,setFilteredNews] = useState(false);
  const [language] = useContext(LanguageContext);

  useEffect(()=>{
  	const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;


       try{

  	axios.get(`https://gnews.io/api/v3/top-news?lang=${language}&max=9&token=${API_KEY}`)
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
},[language]);

 const classes = useStyles();

 const handleChange=(e)=>{
 	e.preventDefault();
 	setSearchData(e.target.value);
 }

const handleSubmit=(e)=>{
	e.preventDefault();
	setFilteredNews(true);
}
  return (
  <>
  
        <div className="banner-div">
          <div className="caption">
           <h1> Get Unlimited Access </h1>
         
           <Button variant="contained" size="large" className={classes.margin}>
          Subscribe
           </Button>
          </div>

           <div className="weather-holder">
                    
		           <Suspense fallback={null}>
				      <Weather/>
				      </Suspense>      
		           </div>
  
           
        </div>
        
		<div className="main-section">
		     
		       <h1 className="title"> Top News </h1>
		        <div className="search-holder">
		        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
		     
		            <TextField id="outlined-basic" 
		                    label="Search any Keyword here.." 
		                    variant="outlined" 
		                    onChange={handleChange}/>
		        </form>
		          </div>
               

		          {filteredNews ?
		          	<FilterNews />
		          	:

		        <NewsDisplay data={data} />
		    }
		</div>
    </>
  );
}

export default Home;

















 