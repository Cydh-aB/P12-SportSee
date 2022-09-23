import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**Style**/

const StyleText = styled.div`
position: relative;
left: 50%;
transform: translate(-50%, -50%);
font-size: 12px;
line-height: 18px;
font-weight: 500;
text-align: center;
color: #74798c;
background: #FBFBFB;
border-radius: 50%;
padding-top: 3.7rem;
background-color: transparent;
`

const StyleScore = styled.p`
color: rgba(0,0,0, 0.8);
font-weight: 700;
font-size: 26px;
`
/****/

/** create a custom tooltype for the user activity barChart
 * @param  {array} payload
 * @return {JSX}
 */

export function UserScoreTooltype(payload){
    return(
        <StyleText>
            <StyleScore>
                {payload?.payload[0]?.payload.todayScore}%
            </StyleScore>
            de votre <br />
            objectif
        </StyleText>
    )
}

UserScoreTooltype.propTypes = {
	payload: PropTypes.array,
};