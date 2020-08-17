import React from 'react';
import {AppBar} from '@material-ui/core';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



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
  
    <Tab label="Home" {...a11yProps(0)} /> 
    <Tab label="Sports" {...a11yProps(1)} />
  
     <Tab label="Health" {...a11yProps(2)} />
       <Tab label="Weather" {...a11yProps(3)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  Home
</TabPanel>
<TabPanel value={value} index={1}>
  Sports
</TabPanel>

<TabPanel value={value} index={2}>
 Health
</TabPanel>
<TabPanel value={value} index={3}>
Weather
</TabPanel>
</>
)
}

export default Navbar;