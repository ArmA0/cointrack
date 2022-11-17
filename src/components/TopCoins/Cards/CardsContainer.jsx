import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarkets } from '../../../redux/actions/marketsActions';
import Cards from './Cards';
class CardsContainer extends Component {
    
    componentDidMount() {
        this.props.loadMarketData(10)
    }

    render() { 
        return (
            <>
            <Cards />
            </>
        );
    }
}

const mapState = state => {

}

const mapDispatch = dispatch => {
    return {
        loadMarketData: pageSize => {
            dispatch(getMarkets(pageSize))
        }
    }
}

export default connect(mapState, mapDispatch)(CardsContainer)