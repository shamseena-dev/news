
import React from 'react';

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
        <Card className={classes.root} raised>
      <CardActionArea>
       <div className="card-header"> 
         <h3> {newsData.source.name} </h3>
          <h4>   {newsData.publishedAt} </h4>

          </div>
        {newsCardData.image ? 
        <CardMedia
          component="img"
          alt={newsCardData.title}
          height="140"
          image={newsCardData.image}
          title={newsCardData.title}
        /> : null }
         

         <a href={newsCardData.url}><CardContent >

          <Typography gutterBottom variant="h6" component="h6" color="textSecondary">
           {newsCardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsCardData.description}
          </Typography>
        </CardContent> </a>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
         <a href={newsCardData.url}> Read More </a>
        </Button>

        
     
      </CardActions>
    </Card>
  </div>




  );
}

export default NewsCard;



