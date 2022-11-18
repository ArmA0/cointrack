import React, { Component } from 'react';
import c from './card.module.css'
import Chart from './Chart/Chart';
class Card extends Component {   

    render() {
        const image = this.props.image
        let priceRise = 'still'


        const priceChange = this.props.price_change_percentage_24h
        if(priceChange > 0) {
            priceRise = 'up'
        } else if (priceChange < 0) {
            priceRise = 'down'
        } else {
            priceRise = 'still'
        } 
        const conditionalClassnames = ` 
                ${priceRise === 'up' ? c.up : ''}
                ${priceRise === 'down' ? c.down : ''}
                ${priceRise === 'still' ? c.still : ''}`


        return <div className={c.cardWrapper}>
            <img src={image} alt="coin logo" className={c.imgLogo} />
            <div className={c.coinName}>{this.props.name}</div>
            <div className={c.currentPrice} >${this.props.current_price}</div>
            <div className={c.priceChangeInPercent + conditionalClassnames}>
                    {priceRise === 'up' && '+'}{Number(this.props?.price_change_percentage_24h?.toFixed(2))}%
            </div> 
            <div className={c.priceChange + conditionalClassnames}>
                ${this.props.price_change_24h?.toFixed(2)}
            </div>
            <p className={c.last24h}>last 24h</p>
            <Chart />
        </div>;
    }
}
 
export default Card;