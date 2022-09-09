import React, {useState, useEffect} from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { fetchPerformance } from "../../assets/Data/API";

/**Style**/

const StyleContainer = styled.div`
position: relative;
width: 258px;
height: 263px;
background: #282D30;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
`
/****/

/**
 * Render a RadarChart with user data performance
 * @return {JSX}
 */
export default function UserPerformance() {
    const [performance, setPerformance] = useState([])
    useEffect(() =>{
        fetchPerformanceUser()
    }, [])

    async function fetchPerformanceUser(){
        const data = await fetchPerformance()
        setPerformance(data)
    }
    if (performance.length === 0) return (<></>)
    return (
        <StyleContainer>
            <ResponsiveContainer width="100%" heigth= "100%">
                <RadarChart cx='50%' cy='50%' outerRadius='65%' data={performance}>
                    <PolarGrid gridType="polygon"/>
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 10 }}
                    />
                    <Radar
                        dataKey='value' 
                        stroke='#FF0101' 
                        fill='#FF0101B2'
                        fillOpacity={0.7} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </StyleContainer>
    )
}