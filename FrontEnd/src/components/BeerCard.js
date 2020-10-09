import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

const BeerCard = props => {

  const {name, abv, description, food_pairing} = props.card

  return(
      <div >  
      <Card style={{ height: 600, width: 400, margin: 10 }} variant='outlined'>
      {console.log("BeerCard", props)}
      
        <CardHeader
          title={name}
        />
        <CardContent>
          <Typography>
            <strong>
              ABV:<br></br>
            </strong>
            {abv}%
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              Description:<br></br>
            </strong>
            {description}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              Food Pairing: <br></br>
            </strong>
            <ul>
              <li>{food_pairing[0]}</li>
              <li>{food_pairing[1]}</li>
              <li style={{ visibility: food_pairing[2] ? 'visible' : 'hidden'  }}>{food_pairing[2] ? food_pairing[2] : null}</li>
            </ul>
          </Typography>
        </CardContent>
        <button onClick={props.handleFlip}>FLIP!</button>
      </Card>
      </div>
  )
}

export default BeerCard