import apiUrl from '../apiConfig'
import axios from 'axios'

// show function
export const getToDoList = (toDoListid) => {
    return axios(`${apiUrl}/todo/${toDoListid}`)
}
//this is to fix shanes code