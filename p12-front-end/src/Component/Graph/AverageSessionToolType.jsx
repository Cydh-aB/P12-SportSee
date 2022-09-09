import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**Style**/

const StyleContainer = styled.div`
background-color: white;
width: 40px;
height: 25px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyleText = styled.p `
color: black;
font-weight: 500;
font-size: 10px;
line-height: 24px;
margin-top: 1px;
`
/****/

export default function SessionsToolType({ active, payload }) {
    
  if (active) {
    return (
      <StyleContainer>
        <StyleText>{payload[0].value}min</StyleText>
      </StyleContainer>
    );
  }
  return null;
}

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};