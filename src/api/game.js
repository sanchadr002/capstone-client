import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCharacter = (user, charid) => {
	return axios({
        url: `${apiUrl}/character/${charid}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}