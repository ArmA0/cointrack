import React from 'react';
import Button from '../helpers/Button/Button';
import c from './topcoins.module.css'
import building from '../../images/building.png'
import CardsContainer from './Cards/CardsContainer';

class TopCoins extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className={c.wrapper}>
                <h1 className={c.headerName}>Track your cryptocurrency assets from one place</h1>
                <p className={c.descriptionText}>Cointrack.ai is a simple and secure crypto portfolio tracker which manages your DeFi assets</p>
                <div className={c.button}>
                    <Button text='Start Tracking' />
                </div>
                <img src={building} alt="building" className={c.building} />
                <div className={c.cardsContainer}><CardsContainer /></div>
            </div>
         );
    }
}
 
export default TopCoins;