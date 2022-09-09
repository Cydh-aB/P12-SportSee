import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserAverageSession from "../Component/Graph/AverageSession";
import BarCharts from "../Component/Graph/Activity";
import UserPerformance from "../Component/Graph/UserPerf";
import ScoreChart from "../Component/Graph/UserScore";
import CalorieIcon from "../assets/Image/calories_icon.png"
import GlucidIcon from "../assets/Image/glucides_icon.png"
import LipidIcon from "../assets/Image/lipides_icon.png"
import ProteinIcon from "../assets/Image/proteines_icon.png"
import NutritionData from "../Component/NutritionData";
import Greetings from "../Component/Greetings";
import { device } from "../Utils/MediaQueries";
import { fetchInfo, fetchUserInfo } from "../assets/Data/API";

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

const redIcon = '#fbeaea'
const blueIcon = '#e9f4fb'
const yellowIcon = '#faf6e5'
const pinkIcon = '#fbeaef'

/**Render the dashboard User
 * @return {JSX}
 */
   
function User() {
     
   const [infos, setInfos] = useState([])
   const [infoUser, setInfoUser] = useState([])
   let connecDB = false

   useEffect(() => {
    fetchUserInformation()
   }, [connecDB])
  
   async function fetchUserInformation() {
    const info = await fetchInfo()
    setInfos(info)
    const infoUser = await fetchUserInfo()
    setInfoUser(infoUser)
   }

   if(infoUser?.firstName !== undefined){
    connecDB = true
   } else {
    connecDB = false
   }
    return(
        connecDB?(
            <>
        <StyleMain>
            
            <StyleContainer>
                <div>
                <Greetings name={infoUser.firstName}/>
                <BarCharts />
                <StyleChart>
                    <UserAverageSession />
                    <UserPerformance />
                    <ScoreChart />
                </StyleChart>
                </div>
                <StyleNutrition>
                    <NutritionData 
                        icon={CalorieIcon}
                        info={`${infos?.calorieCount}kCal`}
                        text="Calories"
                        backgroundColor={redIcon}
                    />
                    <NutritionData 
                        icon={ProteinIcon}
                        info={`${infos?.proteinCount}g`}
                        text="Proteines"
                        backgroundColor={blueIcon}
                    />
                    <NutritionData 
                        icon={GlucidIcon}
                        info={`${infos?.carbohydrateCount}g`}
                        text="Glucides"
                        backgroundColor={yellowIcon}
                    />
                    <NutritionData 
                        icon={LipidIcon}
                        info={`${infos?.lipidCount}g`}
                        text="Lipides"
                        backgroundColor={pinkIcon}
                    />
                </StyleNutrition>
            </StyleContainer>
        </StyleMain>
        </>
        )
        :(<p>Data error</p>)
    )
}

export default User;