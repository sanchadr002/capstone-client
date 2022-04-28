import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllTasks = (user) => {
	return axios({
        url: `${apiUrl}/task`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// // show function
// export const getOneTask = (tasiId) => {
//     return axios(`${apiUrl}/task/${tasiId}`)
// }

// POST -> create function
export const createTask = (user, newTask) => {
    console.log('user', user)
    console.log('this is newTask', newTask)
    return axios({
        url: `${apiUrl}/task`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { task: newTask }
    })
}
