import apiUrl from '../apiConfig'
import axios from 'axios'

// show function
export const getCharacter = (charid) => {
    return axios(`${apiUrl}/character/${charid}`)
}