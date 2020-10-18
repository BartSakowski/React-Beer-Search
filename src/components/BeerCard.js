import React from 'react';
import { Button, CardHeader, CardContent, Typography, Box } from '@material-ui/core';



const BeerCard = props => {

  const {name, abv, description, food_pairing} = props.card

  return(
    <Box style={{ height: 600, width: 400, margin: 10 }} boxShadow={9}>

      <CardHeader
        title={name}
      />
      <CardContent style={{ padding: 8}}>
        <Typography>
          <strong>
            ABV:
          </strong>
            {` ${abv}%`}
        </Typography>
      </CardContent>

      <CardContent style={{ padding: 8}}>
        <Typography>
          <strong>
            Description:<br></br>
          </strong>
          {description}
        </Typography>
      </CardContent>

      <CardContent style={{ padding: 8}}>
        <Typography>
          <strong>
            Food Pairing: <br></br>
          </strong>
          <div>
            <p style={{ margin: 'unset' }}>{food_pairing[0]}</p>
            <p style={{ margin: 'unset' }}>{food_pairing[1]}</p>
            <p style={{ margin: 'unset', visibility: food_pairing[2] ? 'visible' : 'hidden'  }}>{food_pairing[2] ? food_pairing[2] : null}</p>
          </div>
        </Typography>
      </CardContent>
      <Button variant="contained" onClick={props.handleFlip}>Stats!</Button>
    </Box>
  )
}

export default BeerCard