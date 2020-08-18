import React,{useEffect , useState, useContext} from 'react';
import axios from "axios";
import NewsDisplay from '../NewsDisplay/NewsDisplay';
import {SearchContext} from '../../contexts/SearchContext/SearchContext';
import {LanguageContext} from '../../contexts/LanguageContext';


function FilterNews() {
	
  const [data , setData] = useState([
        {
"title": "Updated",
"description": "abcd",
"url": "https://news.google.com/__i/rss/rd/articles/CBMiTGh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3BvbGl0aWNzL2thc2ljaC1mb3JtZXItZ29wLWNvbmdyZXNzbWFuLWVuZG9yc2UtYmlkZW7SAVBodHRwczovL3d3dy5mb3huZXdzLmNvbS9wb2xpdGljcy9rYXNpY2gtZm9ybWVyLWdvcC1jb25ncmVzc21hbi1lbmRvcnNlLWJpZGVuLmFtcA?oc=5",
"image": null,
"publishedAt": "2020-08-17 12:15:07 UTC",
"source": {
"name": "Fox News",
"url": "https://www.foxnews.com"
}
},
{
"title": "Louis DeJoy: is Trump's new post office chief trying to rig the election?",
"description": "",
"url": "https://news.google.com/__i/rss/rd/articles/CBMiXGh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS91cy1uZXdzLzIwMjAvYXVnLzE3L2xvdWlzLWRlam95LXVzcHMtcG9zdG1hc3Rlci1nZW5lcmFsLWVsZWN0aW9u0gFcaHR0cHM6Ly9hbXAudGhlZ3VhcmRpYW4uY29tL3VzLW5ld3MvMjAyMC9hdWcvMTcvbG91aXMtZGVqb3ktdXNwcy1wb3N0bWFzdGVyLWdlbmVyYWwtZWxlY3Rpb24?oc=5",
"image": null,
"publishedAt": "2020-08-17 11:07:00 UTC",
"source": {
"name": "The Guardian",
"url": "https://www.theguardian.com"
}
},
{
"title": "COVID-19 will hit colleges when students arrive for fall semester. So why open at all? Money is a factor.",
"description": "",
"url": "https://news.google.com/__i/rss/rd/articles/CBMibmh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzL2VkdWNhdGlvbi8yMDIwLzA4LzE3L2NvdmlkLWNhc2VzLWNvbGxlZ2UtZmFsbC1zZW1lc3Rlci10dWl0aW9uLzU1OTEyNDUwMDIv0gEnaHR0cHM6Ly9hbXAudXNhdG9kYXkuY29tL2FtcC81NTkxMjQ1MDAy?oc=5",
"image": null,
"publishedAt": "2020-08-17 09:01:26 UTC",
"source": {
"name": "USA TODAY",
"url": "https://www.usatoday.com"
}
},
{
"title": "Twitter buzzes after Kasich says former GOP congressman will endorse Biden",
"description": "",
"url": "https://news.google.com/__i/rss/rd/articles/CBMiTGh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3BvbGl0aWNzL2thc2ljaC1mb3JtZXItZ29wLWNvbmdyZXNzbWFuLWVuZG9yc2UtYmlkZW7SAVBodHRwczovL3d3dy5mb3huZXdzLmNvbS9wb2xpdGljcy9rYXNpY2gtZm9ybWVyLWdvcC1jb25ncmVzc21hbi1lbmRvcnNlLWJpZGVuLmFtcA?oc=5",
"image": null,
"publishedAt": "2020-08-17 12:15:07 UTC",
"source": {
"name": "Fox News",
"url": "https://www.foxnews.com"
}
},
{
"title": "Louis DeJoy: is Trump's new post office chief trying to rig the election?",
"description": "",
"url": "https://news.google.com/__i/rss/rd/articles/CBMiXGh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS91cy1uZXdzLzIwMjAvYXVnLzE3L2xvdWlzLWRlam95LXVzcHMtcG9zdG1hc3Rlci1nZW5lcmFsLWVsZWN0aW9u0gFcaHR0cHM6Ly9hbXAudGhlZ3VhcmRpYW4uY29tL3VzLW5ld3MvMjAyMC9hdWcvMTcvbG91aXMtZGVqb3ktdXNwcy1wb3N0bWFzdGVyLWdlbmVyYWwtZWxlY3Rpb24?oc=5",
"image": null,
"publishedAt": "2020-08-17 11:07:00 UTC",
"source": {
"name": "The Guardian",
"url": "https://www.theguardian.com"
}
},
{
"title": "COVID-19 will hit colleges when students arrive for fall semester. So why open at all? Money is a factor.",
"description": "",
"url": "https://news.google.com/__i/rss/rd/articles/CBMibmh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzL2VkdWNhdGlvbi8yMDIwLzA4LzE3L2NvdmlkLWNhc2VzLWNvbGxlZ2UtZmFsbC1zZW1lc3Rlci10dWl0aW9uLzU1OTEyNDUwMDIv0gEnaHR0cHM6Ly9hbXAudXNhdG9kYXkuY29tL2FtcC81NTkxMjQ1MDAy?oc=5",
"image": null,
"publishedAt": "2020-08-17 09:01:26 UTC",
"source": {
"name": "USA TODAY",
"url": "https://www.usatoday.com"
}
}
    ]);
    const [language] = useContext(LanguageContext);
    const [searchData] = useContext(SearchContext);
  useEffect(()=>{
  	const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;


       try{

  	axios.get(`https://gnews.io/api/v3/search?q=${searchData}&max=9&lang=${language}&token=${API_KEY}`)
    .then(res =>{
              


           if(res.data){
                    console.log("res",res);
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

















 