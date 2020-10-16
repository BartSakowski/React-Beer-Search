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
    menuState.category === 'name' ? nameSearch()
      : menuState.category === 'food_pairing' ? foodPairingSearch() 
      : menuState.category === 'abv' ? abvSearch()
      : menuState.category === 'ibu' ? ibuSearch()
      : menuState.category === 'srm' ? srmSearch()
      : menuState.category === 'hops' ? hopsSearch()
      : menuState.category === 'malts' ? maltsSearch()
      : menuState.category === 'attenuation_level' ? attenuationLevelSearch()
      : alert('Please select a category')
  };

  const nameSearch = () => {
    let filteredCards = searchState.beers.filter(beer => {
      return beer.name.toLowerCase().includes(textField.text.toLowerCase())
    })
    setCardState({
      passingCards: filteredCards
    });
  };

  const foodPairingSearch = () => { 
    let filteredCards = searchState.beers.filter(beer => {
        return beer.food_pairing.some(food => {
          return food.toLowerCase().includes(textField.text.toLowerCase())
      });
    });
    setCardState({
      passingCards: filteredCards
    });
    
  };

  const abvSearch = () => {
  let inputAbv = parseFloat(textField.text);
  let filteredCards = searchState.beers.filter(beer => {
      return beer.abv === inputAbv
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const ibuSearch = () => { 
    let inputIbu = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.ibu === inputIbu
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const srmSearch = () => { 
    let inputSrm = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.srm === inputSrm
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const hopsSearch = () => { 
   let filteredCards = searchState.beers.filter(beer => {
     return beer.ingredients.hops.some(hops => {
      return hops.name.toLowerCase().includes(textField.text.toLowerCase())
     })
   })
    setCardState({
      passingCards: filteredCards
    })
  };

  const attenuationLevelSearch = () => {  
    let inputAtt = parseFloat(textField.text);
    let filteredCards = searchState.beers.filter(beer => {
      return beer.attenuation_level === inputAtt
    });
    setCardState({
      passingCards: filteredCards
    });
  };

  const maltsSearch = () => { 
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
      <div className='Search-Field'>
        {console.log('passingCards', cardState.passingCards)}
        <FormControl 
          style={{ margin: '10px'}}
        >
          <InputLabel>How Do You Want To Find Your Beer?</InputLabel>
        
          <Select 
            value={menuState.category}
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
          { // Shows details under the category select
          menuState.category === 'name' ? <div className='Description'>Looking for something specific? Type it in and we'll give you the details!</div> 
          : menuState.category === 'food_pairing' ? <div className='Description'>Here's a couple, two, three food items that go great with this beer.</div>
          : menuState.category === 'abv' ? <div className='Description'>Alcohol by volume, you already knew this one!</div>
          : menuState.category === 'ibu' ?  <div className='Description'>International Bittering Unit: a measure of bitterness between 1 and 120. The higher the IBU, the more bitter it is. </div>
          : menuState.category === 'srm' ? <div className='Description'>Standard Reference Method: A scale of 1 to 40+ that describes the color of beer. Colors over 40 exist, but are variations on "Dark Black".</div>
          : menuState.category === 'hops' ? <div className='Description'>Hops add bitterness, flavor, color and aroma to beer. Flavors can be earthy, sweet, floral, citrus, etc. </div>
          : menuState.category === 'malts' ? <div className='Description'>Malt adds flavor and color to beer. Often, the flavor will be in the form of roasty, nutty, sometimes chocolatey flavors </div>
          : menuState.category === 'attenuation_level' ? <div className='Description'>Refers to the conversion of sugars into alcohol and carbon dioxide. The more attenuated, the drier and more alcoholic the beer will be. </div>
          : <div></div>}
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
