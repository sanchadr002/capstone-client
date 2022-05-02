import apiUrl from '../apiConfig'
import axios from 'axios'

//////////////////////////////
// INDEX -> GET  //
//////////////////////////////
export const getCharacter = () => {
    return axios(`${apiUrl}/character`)
}

/////////////////////////////////////
// UPDATE -> PATCH  //
/////////////////////////////////////
export const patchCharacter = (user, character) => {
    console.log('this is character', character)
    return axios({
        url: `${apiUrl}/character/${character._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { character: character }
    })
}

//////////////////////////////////////////////
// SHOW -> GET //
//////////////////////////////////////////////
export const getTheCharacter = (user) => {
    return axios({
        url: `${apiUrl}/character/view`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}