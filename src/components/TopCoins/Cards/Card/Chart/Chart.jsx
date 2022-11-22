import React, { Component } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';
import c from './chart.module.css'



class Chart extends Component {
    

    render() { 
        
        function getEveryNth(arr, num) {
            const _arr = []
            for(let i = 0; i < arr?.length; i += num) {
                _arr.push(arr[i])
            }
            return _arr
        }
        
        const data = getEveryNth(this.props.priceData[0], 28).map(a => ({
            date: a[0],
            price: a[1]
            }))



        // const data = this.props.priceData[0]?.map(arr => ({
        //     date: arr[0],
        //     price: arr[1]
        // }))
        // console.log(data);


        return <div className={c.chart}>
            <ResponsiveContainer width="100%" height="100%">
                
                <AreaChart
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 3
                }}>
                    <defs>      
                        <linearGradient id="chart" x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="0%" stopColor="#fb00e262" />
                            <stop offset="100%" stopColor="#fb00e21f"  />
                        </linearGradient>
                    </defs>
                    <YAxis 
                        hide={true}
                        domain={['dataMin', 'dataMax']}
                    />
                    <XAxis 
                        dataKey="date"
                        hide={true}
                    />
                    <Area type="CurveFactory" dataKey="price" stroke="#fb00e21f" 
                        fill="url(#chart)" radius={[0, 0, 21, 21]}
                    />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    }
}

 
export default Chart