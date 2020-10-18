import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import Logo from './logo2.png';


function App() {

  const [appState, setAppState] = useState({
    beers: {},
  });

  useEffect(() => {
    const url = 'https://api.punkapi.com/v2/beers?page='
    const urlPage = '&per_page=80'
    Promise.all([fetch(`${url}1${urlPage}`), fetch(`${url}2${urlPage}`), fetch(`${url}3${urlPage}`), fetch(`${url}4${urlPage}`), fetch(`${url}5${urlPage}`) ])
      .then(([resp1, resp2, resp3, resp4, resp5]) => {
        return Promise.all ([resp1.json(), resp2.json(), resp3.json(), resp4.json(), resp5.json()])
      })
      .then(([resp1, resp2, resp3, resp4, resp5]) => {
        setAppState({beers:[...resp1, ...resp2, ...resp3, ...resp4, ...resp5] })
      })
  },[])
  
  return (
    <div className="App">

      <div>
        <img src={Logo} alt='beer logo'/>
      </div>
      <SearchBar {...appState}/>
    </div>
  )
}
export default App