import React, { useState, useEffect } from 'react';
import {Button, TextField, FormControl, Select, MenuItem, InputLabel, Grid} from '@material-ui/core';
import CardFlipper from './CardFlipper';

const SearchBar = props => {
  const [searchState, setSearchState] = useState(props);
  const [menuState, setMenuState] = useState({ category: '' });
  const [textField, setTextField] = useState({ text: '' })
  const [cardState, setCardState] = useState({ passingCards: [] })

  useEffect(() => {
    setSearchState(props);
  }, [props])

  const handleChange = (event) => {
    event.preventDefault();
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
      : menuState.category === 'food_pairing' ? foodPairingSearch() 
      : menuState.category === 'abv' ? abvSearch()
      : menuState.category === 'ibu' ? ibuSearch()
      : menuState.category === 'srm' ? srmSearch()
      : menuState.category === 'hops' ? hopsSearch()
      : menuState.category === 'malts' ? maltsSearch()
      : menuState.category === 'attenuation_level' ? attenuationLevelSearch()
      : alert('Please select a category')};
  };

  const nameSearch = () => {
    let filteredCards = searchState.beers.filter(beer => {
      return beer.name.toLowerCase().includes(textField.text.toLowerCase())
    })
    setCardState({
      passingCards: filteredCards
    });
  };

  const foodPairingSearch = () => { // IT WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let filteredCards = searchState.beers.filter(beer => {
        return beer.food_pairing.some(food => {
          return food.toLowerCase().includes(textField.text.toLowerCase())
      });
    });
    setCardState({
      passingCards: filteredCards
    });
    
  };

  const abvSearch = () => { // works! Just need to determine a range, so the user doesn't have to be super specific.
  let inputAbv = parseFloat(textField.text);
  let filteredCards = searchState.beers.filter(beer => {
      return beer.abv === inputAbv
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const ibuSearch = () => { // works! range would be good here, or at least some guidance. maybe a "hint" as to what this does
    let inputIbu = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.ibu === inputIbu
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const srmSearch = () => { //works!
    let inputSrm = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.srm === inputSrm
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const hopsSearch = () => { // works!
   let filteredCards = searchState.beers.filter(beer => {
     return beer.ingredients.hops.some(hops => {
      return hops.name.toLowerCase().includes(textField.text.toLowerCase())
     })
   })
    setCardState({
      passingCards: filteredCards
    })
  };

  const attenuationLevelSearch = () => {  //works!
    let inputAtt = parseFloat(textField.text);
    let filteredCards = searchState.beers.filter(beer => {
      return beer.attenuation_level === inputAtt
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const maltsSearch = () => { // works!!
    let filteredCards = searchState.beers.filter(beer => {
      return beer.ingredients.malt.some(malt => {
        return malt.name.toLowerCase().includes(textField.text.toLowerCase())
      });
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  return (
    <div>
      {console.log(searchState)}
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
          return <CardFlipper key={card.id} card={card} />
        })}
      </Grid>
    </div>
  )
};

export default SearchBar;
