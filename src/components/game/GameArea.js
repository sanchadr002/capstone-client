import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {getTheCharacter} from '../../api/character'

// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const GameArea = (props) => {

    const [character, setChar] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user} = props
    console.log('this is props in game page', props)
    useEffect(() => {
        getTheCharacter(user)
        .then(res => {setChar(res.data.character)
            console.log('this is character', character)
        })
        
        .catch((error) => {
        })
    }, [updated])


    if (character) {
        return (
            <p>{character.name}</p>
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
            </div>
        </>
    )
}

export default GameArea