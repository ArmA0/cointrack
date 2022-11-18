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
        let element = []
        for (let i = 0; i < 4 ; i++) {
            element[i] = marketData[i]
        }


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
        errorMsg: state.marketData.errorMessage
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