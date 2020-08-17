import React from 'react';
import {NavLink} from 'react-router-dom';

import {AppBar} from '@material-ui/core';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import "./navbar.scss";





function Navbar(){

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
<>

<AppBar position="static">
<h2> LOCAL NEWS </h2>
  
   <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
         <NavLink to="/home" className="MuiButtonBase-root  MuiTab-textColorInherit">   <Tab label="Home" /> </NavLink>
          <NavLink to="/sports" className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit">   <Tab label="Sports" /> </NavLink>
          <NavLink to="/health" className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit">   <Tab label="Health" /> </NavLink>
          <NavLink to="/weather" className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit">   <Tab label="Weather" /> </NavLink>
         
        </Tabs>


   
</AppBar>

</>
)
}

export default Navbar;