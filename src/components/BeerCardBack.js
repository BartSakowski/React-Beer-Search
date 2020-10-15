import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

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
      
      {console.log('maltNames', maltNames())}

      <Card style={{ height: 600, width: 400, margin: 10 }} variant='outlined'>     
        <CardHeader
          title={name}
        />
        <CardContent>
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
        
        <CardContent>
          <Typography>
            <strong>
              Hops:
            </strong>
            <div>
              {hopList()}
            </div>
          </Typography>
        </CardContent>

        <CardContent >
          <Typography >
            <strong>
              Malts:<br></br>
            </strong>
            <div >
            {maltNames()}
            </div>
          </Typography>
        </CardContent>

        <button onClick={props.handleFlip}>FLIP!</button>
      </Card>
      </div>

  )
}

export default BeerCardBack;