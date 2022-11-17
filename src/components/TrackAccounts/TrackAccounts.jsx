import React from 'react';
import c from './trackaccounts.module.css'

class TrackAccounts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className={c.wrapper}>
                <h1 className={c.head}>Track all your crypto accounts in one place — automatically</h1>
            </div>
         );
    }
}
 
export default TrackAccounts;