import React, { useEffect, useState } from "react";
import { ResponsiveContainer, RadialBar, RadialBarChart, Legend } from "recharts";
import styled from "styled-components";
import { fetchUserScore } from "../../Data/API";
import { UserScoreTooltype } from "./UserScoreTooltype";

/**Style**/

const StyleContainer = styled.div`
position: relative;
width: 258px;
height: 263px;
background: #FBFBFB;
border-radius: 5px;

h2 {
    position: absolute;
    left: 15%;
    top: 5%;
    transform: tranlate(-50%, -50%);
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color:#20253a;
    font-weight: 700;
}
`
/****/

/**create a PieChart with score data of the user
 * @return {JSX} 
 */

export default function ScoreChart() {
    const [score, setScore] = useState([])

    useEffect(() => {
        fetchScore()
    }, [])

    async function fetchScore() {
        const data = await fetchUserScore()
        setScore(data)
    }

    return (
        <StyleContainer>
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={score}>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
                    <Legend content={<UserScoreTooltype />} />
                </RadialBarChart>
            </ResponsiveContainer>
        </StyleContainer>
    )
}