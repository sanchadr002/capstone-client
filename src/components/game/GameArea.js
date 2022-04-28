import React, { useState, useEffect} from 'react'
import { Card, Button, ListGroup, Form, Container, Spinner } from 'react-bootstrap'
import {getCharacter} from '../../api/game'
import { useParams} from 'react-router-dom'

// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const GameArea = (props) => {

    const [character, setChar] = useState(null)
    const { id } = useParams()
    const [updated, setUpdated] = useState(false)
    const {user} = props
    console.log('this is props in game page', props)
    console.log('id in gamePage', id)
    useEffect(() => {
        getCharacter(user, id)
        .then(res => {setChar(res.data.character)
            console.log('this is character', character)
        })
        
        .catch((error) => {
        })
    }, [updated])
    
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
                <p>{character.name}</p>
            </div>
            <div>
                store
            </div>
        </>
    )
}

export default GameArea