import React, { useState, useEffect } from 'react';
import '../App.css';
import {Button, TextField, FormControl, Select, MenuItem, InputLabel, Grid} from '@material-ui/core';
import BeerCard from './BeerCard'

const SearchBar = props => {
  const [searchState, setSearchState] = useState(props);
  const [menuState, setMenuState] = useState({
    category: ''
  });
  const [textField, setTextField] = useState({
    text: ''
  })
  const [cardState, setCardState] = useState({
    passingCards: []
  })

  useEffect(() => {
    setSearchState(props);
  }, [props])

  const handleChange = (event) => {
    setMenuState({
      category: event.target.value
    });
  };

  const handleTextChange = (event) => {
    setTextField({
      ...textField,
      text: event.target.value
    });
  };

  const searchSubmit = () => {
    {menuState.category === 'name' ? nameSearch()
      : menuState.category === 'food_pairing' ? foodPairingSearch() : console.log('keep going')}

  };

  const nameSearch = () => {
    let filteredCards = searchState.beers.filter(beer => {
      return beer.name.includes(textField.text)
    })
    console.log(filteredCards)
    setCardState({
      passingCards: filteredCards
    });
  }

  const foodPairingSearch = () => {
    let filteredCards = searchState.beers.filter(beer => {
       beer.food_pairing.map(food => {
         return food.includes(textField.text)
       })
    });
    console.log(filteredCards)
  }

  return (
    <div>
      {console.log(menuState)}
      {console.log(textField)}
      {console.log(cardState.passingCards)}
      <div className='Search-Field'>
        {console.log('passingCards', cardState.passingCards)}
        <FormControl 
          style={{ margin: '10px'}}
        >
          <InputLabel>How Do You Want To Find Your Beer?</InputLabel>
          <Select 
            onChange={handleChange}
          >
            <MenuItem value={'name'}>Name</MenuItem>
            <MenuItem value={'food_pairing'}>Food Pairing</MenuItem>
            <MenuItem value={'abv'}>ABV</MenuItem>
            <MenuItem value={'ibu'}>IBU</MenuItem>
            <MenuItem value={'srm'}>SRM</MenuItem>
            <MenuItem value={'hops'}>Hops</MenuItem>
            <MenuItem value={'malts'}>Malts</MenuItem>
            <MenuItem value={'attenuation_level'}>Attenuation Level</MenuItem>
          </Select>
        </FormControl>
        <TextField 
          style={{ margin: '10px'}}
          id='outlined-basic' 
          variant="outlined" 
          placeholder="Type What You're Looking For Here!" 
          value={textField.text}
          onChange={handleTextChange}
        />
        <Button style={{ margin: '10px'}} variant='contained' onClick={() => searchSubmit()}> 
          Search
        </Button>
      </div>
      <Grid 
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        { cardState.passingCards.map(card => {
          return <BeerCard key={card.id} card={card} />
        })}
      </Grid>
    </div>

  )
}

export default SearchBar
