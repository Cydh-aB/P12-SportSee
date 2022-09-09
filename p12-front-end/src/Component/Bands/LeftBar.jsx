import React from "react";
import styled from "styled-components";
import Pose from '../../assets/Image/vertical_navbar_icon1.png'
import Natation from '../../assets/Image/vertical_navbar_icon2.png'
import Bike from '../../assets/Image/vertical_navbar_icon3.png'
import Weight from '../../assets/Image/vertical_navbar_icon4.png'
import { device } from "../../Utils/MediaQueries";
import LeftIcon from "./LeftIcon";

/**Style**/

const StyleLeftBar = styled.div`
width: 117px;
height: 141vh;
background-color: black;
position: absolute;

@media ${device.laptopL}{
    height: 115vh;
}
`

const StyleLeftIcon = styled.div`
display: flex;
height: 80%;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyleP = styled.div`
color: #FFF;
display: flex;
align-items: center;

p{  
    position: absolute;
    bottom: 9rem;
    font-size: 12px;
    transform: rotate(-90deg);
}
`
/****/

function LeftBar() {

    const IconArr =  [Pose, Natation, Bike, Weight]

    return(
        <StyleLeftBar>
            <StyleLeftIcon>
                {IconArr.map((item, index) => (
                    <LeftIcon key={index} image={item}/>
                ))}
            </StyleLeftIcon>
            <StyleP>
                <p>Copyright, SportSee 2020</p>
            </StyleP>
        </StyleLeftBar>
    )
}

export default LeftBar