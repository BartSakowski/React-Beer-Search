import React from 'react';
import { Button, CardHeader, CardContent, Typography, Box } from '@material-ui/core';

const BeerCardBack = props => {

  const {name, abv, ibu, srm, attenuation_level} = props.card
  const { hops, malt } = props.card.ingredients

  const hopNames = () => { // pulls out names of all hops for this beer. 
    return hops.map(hop =>{
      return hop.name
    })
  }
  const uniqueHops = Array.from(new Set(hopNames())) // gives only unique names of hops

  const hopList = () => { // creates <li> 
    return uniqueHops.map(hop => {
     return <p style={{ margin: 'unset'}}>{hop}</p>
    })
  }

  const maltNames = () => { // lists malt name in <li>
    return malt.map(m => {
      return <p style={{ margin: 'unset' }}>{m.name}</p>
    })
  };

  return (

    <div>
    
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
          <Typography>
            <strong>
              IBU:
            </strong>
            {` ${ibu}`}
          </Typography>
          <Typography>
            <strong>
              SRM:
            </strong>
            {` ${srm}`}
          </Typography>
          <Typography>
            <strong>
              Attenuation Level:
            </strong>
            {` ${attenuation_level}%`}
          </Typography>
        </CardContent>
        
        <CardContent style={{ padding: 8}}>
          <Typography>
            <strong>
              Hops:
            </strong>
            <div>
              {hopList()}
            </div>
          </Typography>
        </CardContent>

        <CardContent style={{ padding: 8}}>
          <Typography >
            <strong>
              Malts:<br></br>
            </strong>
            <div >
            {maltNames()}
            </div>
          </Typography>
        </CardContent>

        <Button variant="contained" onClick={props.handleFlip}>Flip to Front!</Button>
      </Box>
      </div>

  )
}

export default BeerCardBack;