import React from 'react';
import c from './trackaccounts.module.css'
import Track1 from '../../images/Track1.png'
import Track2 from '../../images/Track2.png'
import Track3 from '../../images/Track3.png'
import Track4 from '../../images/Track4.png'
import Track5 from '../../images/Track5.png'
import trackCoins from '../../images/trackCoins.png'

class TrackAccounts extends React.Component {
    render() { 
        return ( 
            <div className={c.wrapper}>
                <h1 className={c.head}>Track all your crypto accounts in one place — automatically</h1>
                <div className={c.items} >
                    <div>
                        <img src={Track1} alt="track" />
                        <p>Crypto portfolio tracking</p>
                    </div>
                    <div>
                        <img src={Track2} alt="track" />
                        <p>24h cryptocurrency market report</p>
                    </div>
                    <div>
                        <img src={Track3} alt="track" />
                        <p>Crypto price alerts</p>
                    </div>
                    <div>
                        <img src={Track4} alt="track" />
                        <p>Safety and Security</p>
                    </div>
                    <div>
                        <img src={Track5} alt="track" />
                        <p>Push notifications</p>
                    </div>
                </div>
                <img className={c.trackCoins} src={trackCoins} alt='track crypto' />
            </div>
         );
    }
}
 
export default TrackAccounts;