import React from "react";
import styled from "styled-components";

/**Style**/

const StyleIcon = styled.div`
width: 64px;
height: 64px;
background-color: #FFF;
margin-bottom: 20px;
border-radius: 10px;

img {
    display: block;
    margin: 15px auto;
}
`
/****/

/**Function for the icon on the left bar
 * @param {object} props
 * @return {JSX}
 */

function LeftIcon(props) {
    return(
        <StyleIcon>
            <img src={props.image} alt="icon"/>
        </StyleIcon>
    )
}

export default LeftIcon