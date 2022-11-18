import React from 'react'
import c from './app.module.css'
import CryptoPrices from './components/CryptoPrices/CryptoPrices';
import Header from './components/Header/Header';
import TopCoins from './components/TopCoins/TopCoins';
import TrackAccounts from './components/TrackAccounts/TrackAccounts';


class App extends React.Component {
  
  render() { 
    return ( 
      <div className={c.App}>
        <Header />
        <TopCoins />
        <TrackAccounts />
        <CryptoPrices />
      </div>
     )
  }
}
 
export default App;