import React from 'react';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

const BeerCard = props => {
  const stockImage = 'https://www.brewdog.com/media/aheadworks/store_locator/19/intro_logo/Brewdog.jpg'

  const displayImage = props.card.image_url ? require('' + props.card.image_url) : stockImage

  return(
    <div >  
    <Card style={{ height: 800, width: 300, margin: 10, boxShadow: "1px 3px 1px #9E9E9E" }} >
    {console.log("BeerCard", props)}
    
      <CardHeader
        title={props.card.name}
      />
      <CardMedia
        component="img"
        style={{ "300px" : "10em" }}
        image={ displayImage }
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
          <ul>
            <li>{props.card.food_pairing[0]}</li>
            <li>{props.card.food_pairing[1]}</li>
            <li style={{ visibility: props.card.food_pairing[2] ? 'visible' : 'hidden'  }}>{props.card.food_pairing[2] ? props.card.food_pairing[2] : null}</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default BeerCard