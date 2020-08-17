
import React,{useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
import "./newscard.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


function NewsCard({newsData}) {
  const newsCardData = newsData;
  
  const classes = useStyles();

  return (
    
        <div className="news-card">
        <Card className={classes.root}>
      <CardActionArea>
        {newsCardData.image ? 
        <CardMedia
          component="img"
          alt={newsCardData.title}
          height="140"
          image={newsCardData.image}
          title={newsCardData.title}
        /> : null }

        <CardContent>
          <Typography gutterBottom variant="h5" component="h6" color="textSecondary">
           {newsCardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsCardData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
         <a href={newsCardData.url}> Learn More </a>
        </Button>
      </CardActions>
    </Card>
  </div>




  );
}

export default NewsCard;



