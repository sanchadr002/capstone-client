import apiUrl from '../apiConfig'
import axios from 'axios'

//////////////////////////////
// INDEX -> GET  //
//////////////////////////////
export const getStore = (user) => {
	return axios({
        url: `${apiUrl}/store/view`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

////////////////////////////////
// CREATE -> POST /characters //
////////////////////////////////
export const createStore = (user) => {
    return axios({
        url: `${apiUrl}/store`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}


////////////////////////////////
// CREATE -> POST  //
////////////////////////////////
export const addItem = (itemId, user, addItem) => {
    console.log({ itemId })
    return axios({
        url: `${apiUrl}/character/${itemId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: addItem }
    })
}

/////////////////////////////////////
// UPDATE -> PATCH /characters/:id //
/////////////////////////////////////
export const buyItem = (user, oldItem) => {
    console.log('user in editing task' ,user)
    const newItem = {store: {
        description: oldItem.description,
        cost: oldItem.cost,
        bought: true
    }}
    return axios({
        url: `${apiUrl}/store/${oldItem._id}/edit`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: newItem 
    })
}