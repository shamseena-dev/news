import React from 'react';
import "./newsdisplay.scss";
import NewsCard from "../NewsCard/NewsCard";


function NewsDisplay({data}) {
  const newsData = data;
  

  return (
    <div className="container">
     
       


{data ? (<div className="news-container">
           {newsData.map((article,index) =>{
             return <NewsCard key={index} newsData={article} />
})  }
 </div>) : <h5> Sorry, No Data to display </h5>}
        
        
    </div>
  );
}

export default NewsDisplay;

