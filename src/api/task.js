import apiUrl from '../apiConfig'
import axios from 'axios'


//////////////////////////////
// INDEX -> GET  //
//////////////////////////////
export const getAllTasks = (user) => {
	return axios({
        url: `${apiUrl}/task`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

//////////////////////////////////////////////
// SHOW -> GET  //
//////////////////////////////////////////////
export const getOneTask = (user, taskId) => {
    return axios({
        url: `${apiUrl}/task/${taskId}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

////////////////////////////////
// CREATE -> POST  //
////////////////////////////////
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

////////////////////////////////
// UPDATE -> PATCH  //
////////////////////////////////
export const completeTask = (user, oldTask) => {
    console.log('user in editing task' ,user)
    const compTask = {task: {
        title: oldTask.title,
        description: oldTask.description,
        coins: oldTask.coins,
        completed: true
    }}
    return axios({
        url: `${apiUrl}/task/${oldTask._id}/edit`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: compTask 
    })
}

////////////////////////////
// DESTROY -> DELETE //
////////////////////////////
export const deleteTask = (user, taskId) => {
    console.log('user in deleting task', user)
    return axios({
        url: `${apiUrl}/task/${taskId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}