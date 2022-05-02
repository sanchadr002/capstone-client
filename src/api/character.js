import apiUrl from '../apiConfig'
import axios from 'axios'

// patch
export const patchCharacter = (user, character) => {
    return axios({
        url: `${apiUrl}/character/${character._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        }
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