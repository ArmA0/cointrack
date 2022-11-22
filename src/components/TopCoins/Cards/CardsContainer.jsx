import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarkets } from '../../../redux/actions/marketsActions';
import Cards from './Cards';

class CardsContainer extends Component {
    
    componentDidMount() {
        this.props.loadMarketData(10)
    }
    
    render() { 


        const marketData = this.props.marketData
        const chartData = this.props?.coins?.chartData

       
        let element = []
        for (let i = 0; i < 4 ; i++) {
            element[i] = {
                ...marketData[i],
                sparkline_24H: chartData.find(item => item.coin === marketData[i].id)?.data || []
            }
        }
        
        // console.log(chartData);
        // console.log(marketData);
        // console.log(element);
        return <Cards 
                marketData={element}
                loading={this.props.isLoading}
                errorMsg={this.props.errorMsg}
            />
    }
}

const mapState = state => {
    return {
        marketData: state.marketData.marketData,
        isLoading: state.marketData.loading,
        errorMsg: state.marketData.errorMessage,
        coins: state.chartsData
    }
}

const mapDispatch = dispatch => {
    return {
        loadMarketData: pageSize => {
            dispatch(getMarkets(pageSize))
        },
    }
}

export default connect(mapState, mapDispatch)(CardsContainer)