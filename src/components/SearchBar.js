import React, { useState, useEffect } from 'react';
import {Button, TextField, FormControl, Select, MenuItem, InputLabel, Grid} from '@material-ui/core';
import CardFlipper from './CardFlipper';

const SearchBar = props => {
  const [searchState, setSearchState] = useState(props);
  const [menuState, setMenuState] = useState({ category: '' });
  const [textField, setTextField] = useState({ text: '' });
  const [cardState, setCardState] = useState({ passingCards: [] });
  const [hiddenNumValidation, setHiddenNumValidation] = useState('hidden');
  const [hiddenCatValidation, setHiddenCatValidation] = useState('hidden')

  useEffect(() => {
    setSearchState(props);
  }, [props])

  const handleChange = (event) => {
    event.preventDefault();
    setHiddenNumValidation('hidden');
    setHiddenCatValidation('hidden')
    setTextField({
      text: ''
    })
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
      : setHiddenCatValidation('visible')
    
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
    
    if(isNaN(inputAbv)){
      setHiddenNumValidation('visible')
    } else {
      setCardState({
        passingCards: filteredCards
      })
      setHiddenNumValidation('hidden')
    }
  };

  const ibuSearch = () => { 
    let inputIbu = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.ibu === inputIbu
    });

    if(isNaN(inputIbu)){
      setHiddenNumValidation('visible')
    } else {
      setCardState({
        passingCards: filteredCards
      });
      setHiddenNumValidation('hidden')
    }
  };

  const srmSearch = () => { 
    let inputSrm = parseFloat(textField.text)
    let filteredCards = searchState.beers.filter(beer => {
      return beer.srm === inputSrm
    });

    if(isNaN(inputSrm)){
      setHiddenNumValidation('visibile')
    } else {
      setCardState({
        passingCards: filteredCards
      });
      setHiddenNumValidation('hidden')
    }
  };

  const hopsSearch = () => { 
   let filteredCards = searchState.beers.filter(beer => {
     return beer.ingredients.hops.some(hops => {
      return hops.name.toLowerCase().includes(textField.text.toLowerCase())
     })
    })
 
    setCardState({
      passingCards: filteredCards
    });
  };

  const attenuationLevelSearch = () => {  
    let inputAtt = parseFloat(textField.text);
    let filteredCards = searchState.beers.filter(beer => {
      return beer.attenuation_level === inputAtt
    });

    if(isNaN(inputAtt)){
      setHiddenNumValidation('visibile')
    } else {
      setCardState({
        passingCards: filteredCards
      });
      setHiddenNumValidation('hidden')
    }
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

      <div className='Search-Field'>
        <FormControl 
          style={{ margin: '10px'}}
        >
          <InputLabel>How Do You Want To Find Your Beer?</InputLabel>

          <strong style={{ visibility: hiddenCatValidation, color: 'red' }}>Please Select A Category!</strong>

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

        {/* {  Below allows for the Select fields to appear for hops and malts and text field for the others } */}

        </FormControl>
        { menuState.category === 'hops' ?

        <FormControl
          style={{ margin: '10px'}}
        >
          <InputLabel>Which Hops Are You Looking For?</InputLabel>

          <Select
            value={textField.text}
            onChange={handleTextChange}
          >

            <MenuItem value={'Ahtanum'}>Ahtanum </MenuItem>
            <MenuItem value={'Amarillo'}>Amarillo</MenuItem>
            <MenuItem value={'Apollo'}>Apollo</MenuItem>
            <MenuItem value={'Ariana'}>Ariana</MenuItem>
            <MenuItem value={'Bobek'}>Bobek</MenuItem>
            <MenuItem value={'Bramling Cross'}>Bramling Cross</MenuItem>
            <MenuItem value={'Bravo'}>Bravo</MenuItem>
            <MenuItem value={'Callista'}>Callista</MenuItem>
            <MenuItem value={'Cascade'}>Cascade</MenuItem>
            <MenuItem value={'Centennial'}>Centennial</MenuItem>
            <MenuItem value={'Challenger'}>Challenger</MenuItem>
            <MenuItem value={'Chinook'}>Chinook</MenuItem>
            <MenuItem value={'Columbus'}>Columbus</MenuItem>
            <MenuItem value={'Comet'}>Comet</MenuItem>
            <MenuItem value={'Crystal'}>Crystal</MenuItem>
            <MenuItem value={'Dana'}>Dana</MenuItem>
            <MenuItem value={'East Kent Goldings'}>East Kent Goldings</MenuItem>
            <MenuItem value={'El Dorado'}>El Dorado</MenuItem>
            <MenuItem value={'Ella'}>Ella</MenuItem>
            <MenuItem value={'Enigma'}>Enigma</MenuItem>
            <MenuItem value={'Equinox'}>Equinox</MenuItem>
            <MenuItem value={'EXP 366'}>EXP 366</MenuItem>
            <MenuItem value={'First Gold'}>First Gold</MenuItem>
            <MenuItem value={'Fuggles'}>Fuggles</MenuItem>
            <MenuItem value={'Galena'}>Galena</MenuItem>
            <MenuItem value={'German Cascade'}>German Cascade</MenuItem>
            <MenuItem value={'German Comet'}>German Comet</MenuItem>
            <MenuItem value={'Goldings'}>Goldings</MenuItem>
            <MenuItem value={'Green Bullet'}>Green Bullet</MenuItem>
            <MenuItem value={'Hallertauer Blanc'}>Hallertauer Blanc</MenuItem>           
            <MenuItem value={'Hallertauer Mittelfrüh'}>Hallertauer Mittelfrüh</MenuItem>           
            <MenuItem value={'HBC 366'}>HBC 366</MenuItem>
            <MenuItem value={'HBC 369'}>HBC 369</MenuItem>
            <MenuItem value={'Hercules'}>Hercules</MenuItem>
            <MenuItem value={'Hersbrucker'}>Hersbrucker</MenuItem>
            <MenuItem value={'Huell Melon'}>Huell Melon</MenuItem>
            <MenuItem value={'Idaho 7'}>Idaho 7</MenuItem>
            <MenuItem value={'Jester'}>Jester</MenuItem>
            <MenuItem value={'Kohatu'}>Kohatu</MenuItem>
            <MenuItem value={'Magnum'}>Magnum</MenuItem>
            <MenuItem value={'Mandarina Bavaria'}>Mandarina Bavaria</MenuItem>
            <MenuItem value={'Mosaic'}>Mosaic</MenuItem>
            <MenuItem value={'Motueka'}>Motueka</MenuItem>
            <MenuItem value={'Mt. Hood'}>Mt. Hood</MenuItem>
            <MenuItem value={'Nelson Sauvin'}>Nelson Sauvin</MenuItem>
            <MenuItem value={'Nugget'}>Nugget</MenuItem>
            <MenuItem value={'Pacific Hallertau'}>Pacific Hallertau</MenuItem>
            <MenuItem value={'Pacific Jade'}>Pacific Jade</MenuItem>
            <MenuItem value={'Pacifica'}>Pacifica</MenuItem>
            <MenuItem value={'Perle'}>Perle</MenuItem>
            <MenuItem value={'Pioneer'}>Pioneer</MenuItem>
            <MenuItem value={'Saaz'}>Saaz</MenuItem>
            <MenuItem value={'Saphire'}>Saphire</MenuItem>
            <MenuItem value={'Simcoe'}>Simcoe</MenuItem>
            <MenuItem value={'Sorachi Ace'}>Sorachi Ace</MenuItem>
            <MenuItem value={'Spalter'}>Spalter</MenuItem>
            <MenuItem value={'Sterling'}>Sterling</MenuItem>
            <MenuItem value={'Strisselspalt'}>Strisselspalt</MenuItem>
            <MenuItem value={'Styrian Goldings'}>Styrian Goldings</MenuItem>
            <MenuItem value={'Tettnang'}>Tettnang</MenuItem>
            <MenuItem value={'Tomahawk'}>Tomahawk</MenuItem>
            <MenuItem value={'Vic Secret'}>Vic Secret</MenuItem>
            <MenuItem value={'Waimea'}>Waimea</MenuItem>
            <MenuItem value={'Wilamette'}>Wilamette</MenuItem>
          </Select>
        </FormControl>

        : menuState.category === 'malts' ?

        <FormControl
          style={{ margin: '10px' }}
        >

          <InputLabel>Which Malts Are You Looking For?</InputLabel>
          <Select
            value={textField.text}
            onChange={handleTextChange}
          >
            <MenuItem value={'Acidulated Malt'}>Acidulated Malt</MenuItem>
            <MenuItem value={'Amber'}>Amber</MenuItem>
            <MenuItem value={'Black Malt'}>Black Malt</MenuItem>
            <MenuItem value={'Black Patent'}>Black Patent</MenuItem>
            <MenuItem value={'Brown'}>Brown</MenuItem>
            <MenuItem value={'Carafa Special Malt Type 1'}>Carafa Special Malt Type 1</MenuItem>
            <MenuItem value={'Carafa Special Malt Type 2'}>Carafa Special Malt Type 2</MenuItem>
            <MenuItem value={'Carafa Special Malt Type 3'}>Carafa Special Malt Type 3</MenuItem>
            <MenuItem value={'Carahell'}>Carahell</MenuItem>
            <MenuItem value={'Caramalt'}>Caramalt</MenuItem>
            <MenuItem value={'Carapils'}>Carapils</MenuItem>
            <MenuItem value={'Carared'}>Carared</MenuItem>
            <MenuItem value={'Chocolate'}>Chocolate</MenuItem>
            <MenuItem value={'Crisp Rye'}>Crisp Rye</MenuItem>
            <MenuItem value={'Crystal 150'}>Crystal 150</MenuItem>
            <MenuItem value={'Dark Crystal'}>Dark Crystal</MenuItem>
            <MenuItem value={'Dextrin Malt'}>Dextrin Malt</MenuItem>
            <MenuItem value={'Dextrose'}>Dextrose</MenuItem>
            <MenuItem value={'Double Roasted Crystal'}>Double Roasted Crystal</MenuItem>
            <MenuItem value={'DRC'}>DRC</MenuItem>
            <MenuItem value={'Extra Dark Crystal'}>Extra Dark Crystal</MenuItem>
            <MenuItem value={'Extra Pale'}>Extra Pale</MenuItem>
            <MenuItem value={'Flaked Oats'}>Flaked Oats</MenuItem>
            <MenuItem value={'Grano Dei Miracoli'}>Grano Dei Miracoli</MenuItem>
            <MenuItem value={'Lager Malt'}>Lager Malt</MenuItem>
            <MenuItem value={'Light Crystal'}>Light Crystal</MenuItem>
            <MenuItem value={'Maris Otter'}>Maris Otter</MenuItem>
            <MenuItem value={'Maris Otter Extra Pale'}>Maris Otter Extra Pale</MenuItem>
            <MenuItem value={'Medium Crystal'}>Medium Crystal</MenuItem>
            <MenuItem value={'Munich'}>Munich</MenuItem>
            <MenuItem value={'Munich Type 1 Light'}>Munich Type 1 Light</MenuItem>
            <MenuItem value={'Oat Husks'}>Oat Husks</MenuItem>
            <MenuItem value={'Organic Caramalt'}>Organic Caramalt</MenuItem>
            <MenuItem value={'Organic Chocolate'}>Organic Chocolate</MenuItem>
            <MenuItem value={'Organic Lager'}>Organic Lager</MenuItem>
            <MenuItem value={'Organic Munich'}>Organic Munich</MenuItem>
            <MenuItem value={'Pale Ale'}>Pale Ale</MenuItem>
            <MenuItem value={'Pale Crystal'}>Pale Crystal</MenuItem>
            <MenuItem value={'Pale Crystal 60'}>Pale Crystal 60</MenuItem>
            <MenuItem value={'Pale Crystal 350'}>Pale Crystal 350</MenuItem>
            <MenuItem value={'Peated Malt'}>Peated Malt</MenuItem>
            <MenuItem value={'Pilsner'}>Pilsner</MenuItem>
            <MenuItem value={'Pinhead Oats'}>Pinhead Oats</MenuItem>
            <MenuItem value={'Premium English Caramalt'}>Premium English Caramalt</MenuItem>
            <MenuItem value={'Propino Pale Malt'}>Propino Pale Malt</MenuItem>
            <MenuItem value={'Roasted Barely'}>Roasted Barley</MenuItem>
            <MenuItem value={'Rye'}>Rye</MenuItem>
            <MenuItem value={'Simpsons Rye'}>Simpsons Rye</MenuItem>
            <MenuItem value={'Smoked Malt'}>Smoked Malt</MenuItem>
            <MenuItem value={'Smoked Warminster'}>Smoked Warminster</MenuItem>
            <MenuItem value={'Smoked Weyermann'}>Smoked Weyermann</MenuItem>
            <MenuItem value={'Special W'}>Special W</MenuItem>
            <MenuItem value={'Spelt'}>Spelt</MenuItem>
            <MenuItem value={'Torrified Wheat'}>Torrified Wheat</MenuItem>
            <MenuItem value={'Uncrushed Wheat'}>Uncrushed Wheat</MenuItem>
            <MenuItem value={'Vienna'}>Vienna</MenuItem>
            <MenuItem value={'Weyermann Beech Smoked'}>Weyermann Beech Smoked</MenuItem>
            <MenuItem value={'Weyermann Smoked'}>Weyermann Smoked</MenuItem>
            <MenuItem value={'Wheat'}>Wheat</MenuItem>
            <MenuItem value={'Wheat Malt'}>Wheat Malt</MenuItem>
            <MenuItem value={'White Wheat'}>White Wheat</MenuItem>
          </Select>

        </FormControl>
        :
        <TextField 
          style={{ margin: '10px'}}
          id='outlined-basic' 
          variant="outlined" 
          placeholder="Type What You're Looking For Here!" 
          value={textField.text}
          onChange={handleTextChange}
        />
        }
        <strong style={{ visibility: hiddenNumValidation, color: 'red' }}>This category requires a number!</strong>
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
