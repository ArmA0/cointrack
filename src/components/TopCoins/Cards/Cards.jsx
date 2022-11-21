import React from 'react';
import Card from './Card/Card';
import c from './cards.module.css'

class Cards extends React.Component {


    render() { 
        const loading = this.props.loading
        // const errorMsg = this.props.errorMsg
        const marketData = this.props.marketData
        // console.log(marketData, 'MD');
        loading && <div>Loading</div>
        return ( 
            <div className={c.upperWrapper}>
                {marketData && marketData.map((item, index) => {
                    return <div key={index} className={c.wrapper}>
                                <Card {...item}/>
                            </div>
                    })
                }
            </div>
        );
    }
}
 
export default Cards;