import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import Store from '../store/Store'
import mans from '../../srcImg/mans.png'
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

// test again

const GameArea = (props) => {

    const {user} = props
    const [character, setCharacter] = useState(user.playerCharacter)
    console.log('this is props in game page', props)
    useEffect(() => {
        setCharacter(user.playerCharacter)
        // .then(() => {
        //     console.log('this is character', character)
        // })
        // .catch((err) => console.log(err))
    })

    // useEffect(() => {
    //     getTheCharacter(user)
    //     .then(res => {setChar(res.data.character)
    //         console.log('this is character', character)
    //     })
        
    //     .catch((error) => {
    //     })
    // }, [updated])

    // if (character.ownedItems){
    //     itemIndex = character.ownedItems.map(item => {
    //         return(
    //             <li>{item}</li>
    //             )
                
    //         })
    //     }
        
    //     if (!character.ownedItems){
    //         return(
    //             <>
    //             loading items
    //         </>
    //     )
    // }
    
    if (character){
        let itemIndex
        console.log('this is character in GameArea', character)
        if (character.ownedItems){
            itemIndex = character.ownedItems.map(item => {
                console.log('this is item in GameArea', item)
                return (
                    <li>Item: {item.item.description}</li>
                )
            })
        }
        return (
            <div>
                <p>{character.name}</p>
                <p>{character.coins}</p>
                <ul>
                    {itemIndex}
                </ul>
                <img width= "450" height= "450" src= {mans} alt="img placeholder"></img>
            </div>
        )
    }

    if (!character) {
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
            <div>
                GamePage
                <p>{character}</p>
            </div>
            <div>
                store
                {/* <Store user={user}/> */}
            </div>
        </>
    )
}

export default GameArea
//this is to fix shanes code
