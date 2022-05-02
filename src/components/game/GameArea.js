import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import Store from '../store/Store'
import mans from '../../srcImg/mans.png'
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const GameArea = (props) => {
    const [updated, setUpdated] = useState(false)
    const {user} = props
    const [character, setCharacter] = useState(null)
    console.log('this is props in game page', props)
    useEffect(() => {
        setCharacter(user.playerCharacter)
    }, [updated])
    // useEffect(() => {
    //     getTheCharacter(user)
    //     .then(res => {setChar(res.data.character)
    //         console.log('this is character', character)
    //     })
        
    //     .catch((error) => {
    //     })
    // }, [updated])

    if (character){
        console.log('this is the user in game page', user)
        console.log('this is character in GameArea', character)
        return (
            <div>
                <p>Your name is: {character.name}</p>
                 {/* <Store 
                triggerRefresh={() => setUpdated(prev => !prev)}
                user={user}/>  */}
                <h4>Your inventory: </h4>
                <p>{user.playerCharacter.ownedItems[0]}</p>
                <p>{user.playerCharacter.ownedItems[1]}</p>
                <p>{user.playerCharacter.ownedItems[2]}</p>
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
                {/* <Store 
                triggerRefresh={() => setUpdated(prev => !prev)}
                user={user}/> */}
            </div>
        </>
    )
}

export default GameArea