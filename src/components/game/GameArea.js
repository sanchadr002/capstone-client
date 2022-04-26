import React, { useState, useEffect} from 'react'
import { Card, Button, ListGroup, Form } from 'react-bootstrap'
import {getCharacter} from '../../api/game'
import { useParams} from 'react-router-dom'

// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const GamePage = (props) => {
    const [character, setChar] = useState(null)
    const { id } = useParams()
    console.log('id in gamePage', id)
    console.log('this is props in game page', props)
    return(
        <>
            <div>
                GamePage
            </div>
            <div>
                store
            </div>
        </>
    )
}

export default GamePage