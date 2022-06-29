import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  })
  return (
    <div className="App">
      <h1>API</h1>
    </div>
  );
}

export default App;
