import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getCharacter = () => {
    return axios(`${apiUrl}/character`)
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