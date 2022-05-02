import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {getStore} from '../../api/store'
import { buyItem } from '../../api/store'
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const Store = (props) => {

    const {user, triggerRefresh} = props
    const [store, setStore] = useState(null)
    const navigate = useNavigate()
    console.log('this is props in game page', props)
    console.log('this is user.playerStore', user.playerStore)

    let storeIndex
    if (user.playerStore.inventory) {
        // petsJsx = pets.map(pet => (
        //     <li key={pet.id}>
        //         {pet.fullTitle}
        //     </li>
        // ))
        console.log('this is user.playerStore.inventory', user.playerStore.inventory)
        storeIndex = user.playerStore.inventory.map(item => {
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            console.log('this is the item in Store', item)
            const handleClick = (e) => {
                // triggerRefresh()
            //     // e === event
                e.preventDefault()
                console.log('this user in store', user)
                // buyItem(user, item)
                // .then(() => console.log('item is yours')
                // )
                // .catch(() => {
                //     console.log('no update')
                // })
                let cart = item.item.description
                user.playerCharacter.ownedItems.push(cart)
            //     //access task.coins 
            console.log('the owned items', user.playerCharacter.ownedItems)
            //     user.playerCharacter.coins += task.coins
                console.log('this is user.playerCharacter.coins pre-transaction', user.playerCharacter.coins)
                user.playerCharacter.coins -= item.item.cost
            //     task.coins -= task.coins
                console.log('this is user.playerCharacter.coins post-transaction', user.playerCharacter.coins)
                console.log('this is the players inventory', user.playerCharacter.ownedItems)
            //     // .then((character) => {
            //     //     character.coins += task.coins
            //     //     task.coins -= task.coins
            //     // })
            //     //push task.coins to user.coins
            //     //subtract task.coins from itself
            }

            return(
                <>
                    <form>
                        <header>Description: {item.item.description}</header>
                        <li>Cost: {item.item.cost}</li>
                        <button style={{ display: item.item.bought ? "none": "inline-block" }}
                        onClick={handleClick} name='buy'>Buy</button>
                    </form>
                </>
            )
        })
        console.log('this is storeIndex', storeIndex)
    }

    if (!user.playerStore.inventory) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }


    return(
        <>
            {storeIndex}
        </>
    )
}

export default Store