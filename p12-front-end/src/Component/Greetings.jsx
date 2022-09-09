import PropTypes from "prop-types"
import styled from "styled-components"

/**Style**/

const StyleGreetings = styled.section`
margin-bottom: 10%;

h1 {
    font-size: 48px;
}
span {
    color: red;
}

p {
    font-size: 18px;
}
`
/****/

/**
 * Component greetings with the user name
 * @component
 */

const Greetings = ({name}) => {
    return(
        <StyleGreetings>
            <h1>
                Bonjour <span>{name}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyleGreetings>
    )
}

export default Greetings

/**
 * Grettings type definition
 * @typedef {Object} Grettings
 * @property {number} user.id
 * @property {Object} keydata
 * @property {number} keydata.calCount
 * @property {number} keydata.carboCount
 * @property {number} keydata.lipidCount
 * @property {number} keydata.proteinCount
 * @property {number} todayScore
 * @property {object} userInfos
 * @property {number} userInfos.age
 * @property {string} userInfos.firstName
 * @property {string} userInfos.lastName
 */

Greetings.propTypes = {
    user: PropTypes.shape({
        id:PropTypes.number,
        keyData: PropTypes.shape({
            calCount: PropTypes.number,
            carboCount: PropTypes.number,
            lipidCount: PropTypes.number,
            proteinCount: PropTypes.number,
        }),
        todayScore: PropTypes.number,
        userInfos: PropTypes.shape({
            age: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }),
    }),
}