import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from './cryptoprices.module.css'
import Button from '../helpers/Button/Button'
import { useReactTable } from '@tanstack/react-table';

class CryptoPrices extends Component {
    
    render() { 
        const marketData = this.props.marketData

        console.log(marketData);
        const defaultData = [
            {
              firstName: 'tanner',
              lastName: 'linsley',
              age: 24,
              visits: 100,
              status: 'In Relationship',
              progress: 50,
            },
            {
              firstName: 'tandy',
              lastName: 'miller',
              age: 40,
              visits: 40,
              status: 'Single',
              progress: 80,
            },
            {
              firstName: 'joe',
              lastName: 'dirte',
              age: 45,
              visits: 20,
              status: 'Complicated',
              progress: 10,
            },
          ]


        return <div className={c.pricesWrapper}>
            <h1 className={c.header}>See live cryptocurrency prices</h1>
            <div className={c.boxWindow}>
                <div className={c.boxHeader}>
                    
                </div>
            </div>
            <div className={c.button}>
                <Button text='View All' />
            </div>
        </div>;
    }
}

const mapState = state => {
    return {
        marketData: state.marketData.marketData
    }
}
 
export default connect(mapState)(CryptoPrices)