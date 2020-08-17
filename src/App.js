import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";
import Health from "./components/Health/Health";
import Sports from "./components/Sports/Sports";
import Entertainment from "./components/Entertainment/Entertainment";

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Switch>
         <Route exact path='/home' component ={Home} />
          <Route exact path='/sports' component ={Sports} />
           <Route exact path='/health' component ={Health} />
            <Route exact path='/weather' component ={Weather} />
            <Route exact path='/entertainment' component ={Entertainment} />
            <Route path='/' component ={Error} />

         </Switch>
         
    
    </div>
    </BrowserRouter>
  );
}

export default App;
