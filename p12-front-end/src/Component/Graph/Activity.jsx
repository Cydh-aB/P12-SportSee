import React from 'react';
import { useState,useEffect } from 'react';
import { BarChart ,Bar ,XAxis , YAxis,CartesianGrid ,Tooltip, ResponsiveContainer} from "recharts";
import ActivityToolType from './ActivityToolType';
import styled from 'styled-components';
import { fetchUserActivity } from '../../Data/API';

/**Style */

const StyleText = styled.div`
display: flex;
justify-content: space-between;
padding-right: 23px;
padding-left: 2%;
padding-right: 2%;

h2{
    font-size: 15px;
    color: #20253A;
}
`
const StyleInfos = styled.div`
display: flex;
align-items: center;
width: 277px;

p {
    font-size: 14px;
    color: #74798C;
    font-weight: 500;
    margin-left: 15px;
    min-width: fit-content;
}
`

const StyleP = styled.div`
display: flex;
flex-direction: row;
margin-left: 16px;
`

const StyleIcon = styled.div`
height: 10px;
width: 10px;
border-radius: 50%;
background-color: ${(props) => props.color};
align-self: center;
`

const StyleSection = styled.div`
width: 835px;
height: 320px;
margin-bottom: 5%;
background: #fbfbfb;
`

const StyleResponsiveContainer = styled(ResponsiveContainer)`
margin-left: 2%;
`
/****/

/**
 * Render a BarChart with user activity Data
 * @return {JSX}
 */
 export default  function BarCharts() {
    const [activity, setActivity] = useState([])
    
    useEffect(() => {
        fetchActivity()
    }, [])

    async function fetchActivity(){
        const data = await fetchUserActivity()
        setActivity(data)
    }
    return (  
        <StyleSection>
            <StyleText>
                <h2>Activité quotidienne</h2>
                <StyleInfos>
					<StyleP>
						<StyleIcon color='#282D30' />
						<p>Poids (kg)</p>
					</StyleP>
					<StyleP>
						<StyleIcon color='#E60000' />
						<p>Calories brûlées (kCal)</p>
					</StyleP>
				</StyleInfos>
            </StyleText>
            <StyleResponsiveContainer height="80%" >
                <BarChart data={activity} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip wrapperStyle={{ outline: "none" }} content={<ActivityToolType />}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </StyleResponsiveContainer>
        </StyleSection>
    );
}