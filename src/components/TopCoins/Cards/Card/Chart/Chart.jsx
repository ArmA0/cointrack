import React, { Component } from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import c from './chart.module.css'



class Chart extends Component {
    

    render() { 
      
      // console.log(this.props, 'chart props');  
        const data = this.props.priceData
        return <div className={c.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
                
                >
                <Area type="CurveFactory" dataKey="uv" stroke="#fb00e21f" fill="s#ff00e652" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    }
}

 
export default Chart