import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from './cryptoprices.module.css'
import Button from '../helpers/Button/Button'

class CryptoPrices extends Component {
    
    render() { 
        return <div className={c.pricesWrapper}>
            <h1 className={c.header}>See live cryptocurrency prices</h1>
            <div className={c.boxWindow}>
                <div className={c.boxHeader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                    <div></div>
            </div>
            <div className={c.button}>
            <Button text='View All' />
            </div>
        </div>;
    }
}

const mapState = state => {
    return {

    }
}
 
export default connect(mapState)(CryptoPrices)