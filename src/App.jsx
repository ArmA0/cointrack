import React from 'react'
import c from './app.module.css'
import Header from './components/Header/Header';
import TopCoins from './components/TopCoins/TopCoins';
import TrackAccounts from './components/TrackAccounts/TrackAccounts';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() { 
    return ( 
      <div className={c.App}>
        <Header />
        <TopCoins />
        <TrackAccounts />
      </div>
     )
  }
}
 
export default App;