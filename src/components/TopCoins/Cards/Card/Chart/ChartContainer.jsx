import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharts } from '../../../../../redux/actions/chartsActions';
import Chart from './Chart';



class ChartContainer extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.marketData.id !== prevProps.marketData.id) {
            this.props.getChartDatas(this.props.marketData.id)
        }
      }
    

    render() { 
        // console.log(this.props, 'Props');
        const prices = []
        this.props.coins.chartData.find(data => data.coin === this.props.marketData.id && prices.push(data.data))
        return (
            <Chart priceData={prices} />
        )
    }
}

const mapState = state => {
    return {
        coins: state.chartsData
    }
}
const mapDispatch = dispatch => {
    return {
        getChartDatas: coin => {
            dispatch(getCharts(coin))
        }
    }
}
 
export default connect(mapState, mapDispatch)(ChartContainer);