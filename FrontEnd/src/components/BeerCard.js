import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // height: 645
  },
  media: {
    height: 200,
  },
});

const BeerCard = props => {
  const classes = useStyles();
  // debugger
  return(
    <div>

    <Card className={classes.root}>
    {console.log("BeerCard", props)}
    
      <CardHeader
        title={props.card.name}
      />
      <CardMedia  
        className={classes.media} 
        src={props.card.image}
      />
      <CardContent>
        <Typography>
          <strong>
            Description:<br></br>
          </strong>
          {props.card.description}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography>
          <strong>
            Food Pairing: <br></br>
          </strong>
          The food is listed here
        </Typography>
      </CardContent>
    </Card>
    </div>
  )




}

export default BeerCard