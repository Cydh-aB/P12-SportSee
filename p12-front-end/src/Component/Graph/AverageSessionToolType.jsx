import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**Style**/

const StyleContainer = styled.div`
background-color: white;
padding: 5px;
`

const StyleText = styled.p `
color: black;
font-weight: 500;
font-size: 16px;
line-height: 24px;
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