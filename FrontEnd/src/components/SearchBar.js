import React, { useState, useEffect } from 'react';
import '../App.css';
import {Button, TextField, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';


const SearchBar = props => {
  const [searchState, setSearchState] = useState(props);

  useEffect(() => {
    setSearchState(props);
  }, [props])

  return (
    <div className='Search-Field'>
    {console.log(searchState.beers)}

      <FormControl 
        // variant='outlined'
        style={{ margin: '10px'}}
      >
        <InputLabel>How Do You Want To Find Your Beer?</InputLabel>
        <Select>
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
      />
      <Button style={{ margin: '10px'}} variant='contained'> Search</Button>
    </div>
  )
}

export default SearchBar
