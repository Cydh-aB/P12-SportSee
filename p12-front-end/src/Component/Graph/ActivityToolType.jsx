import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**Style**/

const StyleTooltype = styled.div`
background-color: red;
color: #FFF;
padding: 10px;
`
/****/

/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

 export default function ActivityToolType({active, payload}) {
    if (active){
    return (
        <StyleTooltype>
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}Kcal</p>
        </StyleTooltype>
    
     );
    }
    return null
}

ActivityToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};