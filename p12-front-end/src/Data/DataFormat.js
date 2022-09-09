/**
 * All functions purpose are to format the data
 * then it can be used in recharts graphs
 * @constructor
 */

/**Function format data user performance
* @param {object}
* @returns {Array}
*/
 const translate = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité'
}

export function formatPerformance(originalData){
    const { data, kind } = originalData
    const newData = []
    data.forEach(perf => {
        newData.push({
            value: perf.value,
            kind: translate[kind[perf.kind]]
        })
    })
    return newData
}

/**Function format data user activity
* @param {object}
* @returns {Array}
*/

export function formatActivity(originalData){
    const { sessions } = originalData
    const newData = []
    let date 
    sessions.forEach(session => {
        date = new Date(session.day)
        newData.push({
            day: date.getDate(),
            kilogram: session.kilogram,
            calories: session.calories
        })
    })
    return newData
}

const jour = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
}

/**Function format data user average session
* @param {object}
* @returns {Array}
*/

export function formatAverageSession(originalData){
    const { sessions } = originalData
    const newData = []
    sessions.forEach(session => {
        newData.push({
            day: jour[session.day],
            sessionLength: session.sessionLength
        })
    })
    return newData
}

/**Function format data user score
* @param {object}
* @returns {Array}
*/

export function formatScore(originalData) {
    const { data } = originalData
    let score
    if(data.todayScore === undefined){
        score = data.score
    } else {
        score = data.todayScore
    }

    const newData = []
    newData.push({
        userId: data.userId,
        todayScore: score * 100
    })
    newData.push({
        userId: data.userId,
        todayScore: 100,
        fill: '#ffffff00'
    })
    return newData
}