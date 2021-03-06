import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from './Coin'


function App() {
  const[coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    })
    .catch( error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-serach">
        <h1 className="coin-text">Serach a currency</h1>
        <form>
          <input placeholder='Search' className='coin-input' type="text" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id}
          name={coin.name}
          image={coin.image} 
          symbol={coin.symbol}
          />
        )
      })}
    </div>
  );
}

export default App;
