import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './MockupDataTest'
import { formatActivity, formatPerformance, formatAverageSession, formatScore } from './DataFormat'

/**
 * All functions to fetch user Data
 * @constructor
 */


const [link, search] = window.location.href.split('?')
const id = parseInt(link.split('/')[4]) || 12
const mocked = search === 'mocked'

const server = 'http://localhost:3000/user/' + id

export async function fetchInfo() {
    if(mocked) {
        const data = USER_MAIN_DATA.find(user => user.userId === id)
        return data.keyData
    }

    let response
    let data
    try{
        response = await fetch(server)
        data = await response.json()
        return data.data.keyData
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

export async function fetchUserInfo() {
    if(mocked) {
        const data = USER_MAIN_DATA.find(user => user.userId === id)
        return data.userInfos
    }

    let response
    let data
    try{
        response = await fetch(server)
        data = await response.json()
        return data.data.userInfos
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

export async function fetchUserScore() {
    if(mocked) {
        const data = USER_MAIN_DATA.find(user => user.userId === id)
        const newData = formatScore({data: data})
        return newData
    }

    let response
    let data
    try{
        response = await fetch(server)
        data = await response.json()
        const newData = formatScore({ data: data.data})
        return newData
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

export async function fetchUserActivity() {
    if(mocked) {
        const data = USER_ACTIVITY.find(user => user.userId === id)
        const newData = formatActivity({
            sessions: data.sessions,
            day: data.sessions.day,
            kilogram: data.sessions.kilogram,
            calories: data.sessions.calories
        })
        return newData
    }

    let response
    let data
    try{
        response = await fetch(server + '/activity')
        data = await response.json()
        const newData = formatActivity({
            sessions: data.data.sessions,
            day: data.data.sessions.day,
            kilogram: data.data.sessions.kilogram,
            calories: data.data.sessions.calories
        })
        return newData
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

export async function fetchAverageSession() {
    if(mocked) {
        const data = USER_AVERAGE_SESSIONS.find(user => user.userId === id)
        const newData = formatAverageSession({
            sessions: data.sessions,
            day: data.sessions.day,
            sessionLength: data.sessions.sessionLength
        })
        return newData
    }

    let response
    let data
    try{
        response = await fetch(server + '/average-sessions')
        data = await response.json()
        const newData = formatAverageSession({
            sessions: data.data.sessions,
            day: data.data.sessions.day,
            sessionsLength: data.data.sessions.sessionLength
        })
        return newData
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

export async function fetchPerformance() {
    if(mocked) {
        const data = USER_PERFORMANCE.find(user => user.userId === id)
        const newData = formatPerformance({
            data: data.data,
            kind: data.kind
        })
        newData.reverse()
        return newData
    }

    let response
    let data
    try{
        response = await fetch(server + '/performance')
        data = await response.json()
        const newData = formatPerformance({
            data: data.data.data,
            kind: data.data.kind
        })
        return newData
    } catch(err) {
        console.log('Error when trying to retrieve the user data.', err)
    }
}

