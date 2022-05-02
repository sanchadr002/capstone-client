import apiUrl from '../apiConfig'
import axios from 'axios'

// test

// index function
export const getCharacter = () => {
    return axios(`${apiUrl}/character`)
}

export const patchCharacter = (user, character) => {
    console.log('this is character', character)
    return axios({
        url: `${apiUrl}/character/${character._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { character: character }
    })
}

// show function
export const getTheCharacter = (user) => {
    return axios({
        url: `${apiUrl}/character/view`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}