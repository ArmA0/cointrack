import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarkets } from '../../../redux/actions/marketsActions';
import { setChartData } from '../../../redux/slices/chartsSlice'
import Cards from './Cards';

class CardsContainer extends Component {
    
    componentDidMount() {
        this.props.loadMarketData(10)
        
    }
    
    render() { 
        const marketData = this.props.marketData
        const chartData = this.props?.coins?.chartData

        // const test = this.props.coins.chartData.filter(data => {
        //     if(data.coin === marketData.id) {
        //         return data
        //     }
        // })

        
        let element = []
        for (let i = 0; i < 4 ; i++) {
            element[i] = marketData[i]
            chartData.map(item => {
                if (item.coin === marketData[i].id){
                    
                    // element[i].priceHistory = item.data
                    // Object.assign(element[i], {priceHistory: item.data})
                    // element[i].priceHistory = item.data
                } 
            })

            // for (let j = 0; j < i; j++) {
            //     debugger
            //     console.log(element[3] === undefined);
            //     // if ((element) && chartData[j]?.coin === marketData[i]?.id) {
            //     //     console.log(chartData[j]);
            //     //     element[i].priceHistory = chartData[j]?.coin
            //     // }
            // }
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
        marketData: state.marketData?.marketData,
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
        setMappedChartData: (data) => {
            dispatch(setChartData(data))
        }
    }
}

export default connect(mapState, mapDispatch)(CardsContainer)