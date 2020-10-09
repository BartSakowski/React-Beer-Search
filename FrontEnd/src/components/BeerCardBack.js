import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

export const BeerCardBack = props => {
  return (
    <div>
      <Card style={{ height: 600, width: 400, margin: 10 }} variant='outlined'>
        {console.log("BeerCardBack", props)}
      
        <CardHeader
          title={props.card.name}
        />
        <CardContent>
          <Typography>
            <strong>
              ABV:<br></br>
            </strong>
            {props.card.abv}%
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              IBU:<br></br>
            </strong>
            {props.card.ibu}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              SRM:<br></br>
            </strong>
            {props.card.srm}
          </Typography>
        </CardContent>
        
        <CardContent>
          <Typography>
            <strong>
              Attenuation Level:<br></br>
            </strong>
            {props.card.attenuation_level}
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
        <button onClick={props.handleFlip}>FLIP!</button>
      </Card>
      </div>

  )
}

export default BeerCardBack;