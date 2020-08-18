import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";
import Health from "./components/Health/Health";
import Sports from "./components/Sports/Sports";
import Entertainment from "./components/Entertainment/Entertainment";
import Default404 from "./components/Default404/Default404";
import Geolocation from "./components/Geolocation/Geolocation";
import { SearchProvider } from "./contexts/SearchContext/SearchContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { GeolocationProvider } from "./contexts/GeolocationContext";
function App() {
  return (

    <BrowserRouter>
    <GeolocationProvider>
    <LanguageProvider>
    <SearchProvider>
    <div className="App">
    <Navbar />
    <Geolocation />
      <Switch>
       <Route exact path='/' component ={Home} />
         <Route exact path='/home' component ={Home} />
          
            <Route exact path='/weather' component ={Weather} />
            
            <Route path='/' component ={Default404} />

         </Switch>
         
    
    </div>
        </SearchProvider>
        </LanguageProvider>
        </GeolocationProvider>
    </BrowserRouter>
  );
}

export default App;
