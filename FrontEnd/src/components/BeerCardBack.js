import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
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
     return <li>{hop}</li>
    })
  }

  const maltNames = () => { // lists malt name in <li>
    return malt.map(m => {
      return <li>{m.name}</li>
    })
  };
  
  const classNames = makeStyles({
    content: {
      padding: '10px'
    } 
  })


  return (

    <div>
      
      {console.log('maltNames', maltNames())}

      <Card style={{ height: 600, width: 400, margin: 10 }} variant='outlined'>     
        <CardHeader
          title={name}
        />
        <CardContent className={classNames.content}>
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
        </CardContent>
        
        <CardContent>
          <Typography>
            <strong>
              Attenuation Level:
            </strong>
            {` ${attenuation_level}`}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              Hops: <br></br>
            </strong>
          <ul>
           {hopList()}
          </ul>
          </Typography>
        </CardContent>

        <CardContent>
          <Typography>
            <strong>
              Malts:<br></br>
            </strong>
            <ul>
            {maltNames()}
            </ul>
          </Typography>
        </CardContent>

        <button onClick={props.handleFlip}>FLIP!</button>
      </Card>
      </div>

  )
}

export default BeerCardBack;