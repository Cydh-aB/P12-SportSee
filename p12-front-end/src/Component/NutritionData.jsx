import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { device } from "../Utils/MediaQueries";

/**Style**/

const StyleContainer = styled.div`
display:flex;
padding: 2em;
width: 200px;
height: 77px;
background: #FBFBFB;
border-radius: 5px;
align-items: center;
margin-bottom: 0.5%;
justify-content: center;
position: relative;
top: 32%;
margin-right: 1%;

@media ${device.laptopL}{
    margin-bottom: 7.5%;
}

img{
    height: 20px;
}
`

const StyleIcon= styled.div`
width: 60px;
height: 60px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const StyleText = styled.div`
display: flex;
flex-direction: column;
margin-left: 24px;
width: 100px;
`

const StyleMetric = styled.p`
font-weight: bold;
font-size: 20px;
line-height: 24px;
color: #282D30;
margin-bottom: 2px;
`

const StyleP = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #74798C;
`
/****/

/** display icon with user infos
 * @param {string} icon
 * @param {string} infos
 * @param {string} text
 * @param {string} backgroundColor
 * @return {JSX}
 */

export default function NutritionData({icon, info, text, backgroundColor}) {
    return (
        <StyleContainer>
            <StyleIcon style={{backgroundColor}}>
                <img src={icon} alt="calories icon"/>
            </StyleIcon>
            <StyleText>
                <StyleMetric>{info}</StyleMetric>
                <StyleP>{text}</StyleP>
            </StyleText>
        </StyleContainer>
    )
}

NutritionData.propTypes = {
    icon: PropTypes.any,
    info: PropTypes.string,
    text: PropTypes.string,
}