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
        // console.log(this.props, 'container render');
        let data = []
        this.props.coins.chartData.filter(data => {
            // console.log(data, 'sdasda');
            if(data.coin === this.props.marketData.id) {
                data = data.data
            }
        })
        return (
            <Chart pricedata={data} />
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