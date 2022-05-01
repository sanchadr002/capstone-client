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

// show function
export const getOneTask = (user, taskId) => {
    return axios({
        url: `${apiUrl}/task/${taskId}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

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

// UPDATE -> update task
export const updateTask = (user, updatedTask) => {
    console.log('user in editing task' ,user)
    return axios({
        url: `${apiUrl}/task/${updatedTask._id}/edit`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { task: updatedTask }
    })
}

// DELETE -> Delete task
export const removeTask = (user, taskId) => {
    console.log('user in deleting task', user)
    return axios({
        url: `${apiUrl}/task/${taskId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}