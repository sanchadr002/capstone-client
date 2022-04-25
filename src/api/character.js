import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getCharacter = () => {
    return axios(`${apiUrl}/character`)
}