import React from 'react'
import './ChartBox.css'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

// type Props = {
//   color: string;
//   icon: string;
//   title: string;
//   dataKey: string;
//   number: number | string;
//   percentage: number;
//   chartData: object[];
// }

function ChartBox(props) {
   
    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1 className='number'>{props.number}</h1>
                <Link to={"/"} style={{color:props.color}} className='chartBox__link'>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chartBox_chart">
                    <ResponsiveContainer width="99%" >
                        <LineChart  data={props.chartData}>
                            <Tooltip 
                                contentStyle={{background: "transparent", border: "none"}}
                                labelStyle={{display: "none"}}
                                position={{x: 20, y: 100}}
                                dot = {false}
                            />
                            <Line   type="monotone" 
                                    dataKey={props.dataKey}
                                    stroke={props.color}
                                    strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color: props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox