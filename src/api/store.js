import apiUrl from '../apiConfig'
import axios from 'axios'

// display store
export const getStore = (user) => {
	return axios({
        url: `${apiUrl}/store/view`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// create store
export const createStore = (user) => {
    return axios({
        url: `${apiUrl}/store`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}