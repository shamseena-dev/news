import React,{useEffect , useState} from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./weathercard.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


function WeatherCard({data}) {

  const description=data.weather[0].description;
  const icon = data.weather[0].icon;
  const temp = data.main.temp;
   const temp_min =data.main.temp_min;
   const temp_max=data.main.temp_max;
    const pressure =data.main.pressure;
    const humidity =data.main.humidity;
    const wind=data.wind;
     const name=data.name;
     const country=data.sys.country;
           
  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const classes = useStyles();

  return (
    
        <div className="weather-card">
        <Card className={classes.root} >
      <CardActionArea>
        {icon ? 
        <CardMedia
          component="img"
          alt={description}
          
          image={url}
          title={description}
        /> : null }

         <CardContent >
          <Typography gutterBottom variant="h6" component="h6" color="textSecondary">
           {name} , {country}
          </Typography>
          <Typography gutterBottom variant="h4" component="h4" color="textSecondary">
           {Math.round(temp -273.15)} &#8451;
           </Typography>
           <Typography gutterBottom variant="h6" component="h6" color="textSecondary">
           {Math.round(temp_min -273.15)} &#8451;/ {Math.round(temp_max -273.15)} &#8451;
           </Typography>
          <Typography variant="h5" color="primary" component="h5">
           <span className="description"> {description} </span>
          </Typography>


        </CardContent> 
      </CardActionArea>
     
    </Card>
  </div>




  );
}

export default WeatherCard;



