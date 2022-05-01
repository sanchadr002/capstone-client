import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {getStore} from '../../api/store'

// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const Store = (props) => {

    const [store, setStore] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user} = props
    console.log('this is props in game page', props)
    useEffect(() => {
        getStore(user)
        .then(res => {

            setStore(res.data.store)
            console.log('this is store', store)
        })
        
        .catch((error) => {
            console.log(error)
        })
    }, [updated])

    let storeIndex

    // if (store.inventory.length > 0) {
    //     // petsJsx = pets.map(pet => (
    //     //     <li key={pet.id}>
    //     //         {pet.fullTitle}
    //     //     </li>
    //     // ))
    //     storeIndex = store.inventory.map(item => {
    //         // one method of styling, usually reserved for a single style
    //         // we can use inline, just like in html
    //         console.log('this is the item in Store', item)
    //         // const handleClick = (e) => {
    //         //     // e === event
    //         //     e.preventDefault()
    //         //     //access task.coins 
    //         //     user.playerCharacter.coins += task.coins
    //         //     task.coins -= task.coins
    //         //     console.log('this is user.playerCharacter.coins', user.playerCharacter.coins)
    //         //     // .then((character) => {
    //         //     //     character.coins += task.coins
    //         //     //     task.coins -= task.coins
    //         //     // })
    //         //     //push task.coins to user.coins
    //         //     //subtract task.coins from itself
    //         // }

    //         return(
    //             <>
    //                 <form>
    //                     <header>Description: {item.description}</header>
    //                     <li>Cost: {item.cost}</li>
    //                     {/* <button onClick={handleClick} name='completed'>Completed</button> */}
    //                 </form>
    //             </>
    //         )
    //     })
    // }

    // if (!store) {
    //     return (
    //         <Container fluid className="justify-content-center">
    //             <Spinner animation="border" role="status" variant="warning" >
    //                 <span className="visually-hidden">Loading....</span>
    //             </Spinner>
    //         </Container>
    //     )
    // }


    return(
        <>
            <div>
                Store area
                {/* <p>{storeIndex}</p> */}
            </div>
        </>
    )
}

export default Store