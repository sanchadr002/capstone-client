import React from 'react'
import { Card, Button, ListGroup, Form } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const gamePage = (props) => {
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

export default gamePage