import apiUrl from '../apiConfig'
import axios from 'axios'

// show function
export const getCharacter = (charid) => {
    console.log('this is charid', charid)
    return axios(`${apiUrl}/character/${charid}`)
}