import React from "react"
import PropTypes from "prop-types"
import UserAverageSession from "./Graph/AverageSession";
import BarCharts from "./Graph/Activity";
import UserPerformance from "./Graph/UserPerf";
import ScoreChart from "./Graph/UserScore";
import CalorieIcon from "../assets/Image/calories_icon.png"
import GlucidIcon from "../assets/Image/glucides_icon.png"
import LipidIcon from "../assets/Image/lipides_icon.png"
import ProteinIcon from "../assets/Image/proteines_icon.png"
import NutritionData from "./NutritionData";
import Greetings from "./Greetings";
import { device } from "../s/MediaQueries";
import styled from "styled-components";

/**Style**/

const StyleContainer = styled.section`
margin-left: 17%;
display: flex;
flex-direction: column;

@media ${device.laptopL}{
    flex-direction: row;
}
`
const StyleChart = styled.div`
display: flex;
justify-content: space-between;
width: 835px;
`

const StyleMain = styled.main`
`

const StyleNutrition = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-envenly;
margin-top: 5%;
padding-bottom: 5%;

@media ${device.laptopL} {
    display: block;
    margin-top: 0;
    margin-left: 5%;
}
`
/****/

/**
 * Display main section with some RechartsGraph
 * @param {string} user
 * @param {Array} performance
 * @param {Array} averageSessions
 * @param {Array} activity
 * @param {Array} score
 * @return {JSX}
 */

const redIcon = '#fbeaea'
const blueIcon = '#e9f4fb'
const yellowIcon = '#faf6e5'
const pinkIcon = '#fbeaef'

const MainSection = ({user, performance, averageSessions, activity, score}) => {
    return (
        <>
        <StyleMain>
            <StyleContainer>
                <div>
                <Greetings name={user}/>
                <BarCharts data={activity}/>
                <StyleChart>
                    <UserAverageSession data={averageSessions}/>
                    <UserPerformance data={performance}/>
                    <ScoreChart data={score} />
                </StyleChart>
                </div>
                <StyleNutrition>
                    <NutritionData 
                        icon={CalorieIcon}
                        info={`${user.keyData.calorieCount}kCal`}
                        text="Calories"
                        backgroundColor={redIcon}
                    />
                    <NutritionData 
                        icon={ProteinIcon}
                        info={`${user.keyData.proteinCount}g`}
                        text="Proteines"
                        backgroundColor={blueIcon}
                    />
                    <NutritionData 
                        icon={GlucidIcon}
                        info={`${user.keyData.carbohydrateCount}g`}
                        text="Glucides"
                        backgroundColor={yellowIcon}
                    />
                    <NutritionData 
                        icon={LipidIcon}
                        info={`${user.keyData.lipidCount}g`}
                        text="Lipides"
                        backgroundColor={pinkIcon}
                    />
                </StyleNutrition>
            </StyleContainer>
            
        </StyleMain>
        </>
    )
}

export default MainSection

