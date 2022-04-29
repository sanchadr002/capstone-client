import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {getTheCharacter} from '../../api/character'
import mans from '../../srcImg/mans.png'
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const GameArea = (props) => {

    const [updated, setUpdated] = useState(false)
    const {user, theCharacter} = props
    console.log('this is props in game page', props)
    // useEffect(() => {
    //     getTheCharacter(user)
    //     .then(res => {setChar(res.data.character)
    //         console.log('this is character', character)
    //     })
        
    //     .catch((error) => {
    //     })
    // }, [updated])
    theCharacter()
    // if (){
    //     console.log('this is theCharacter in GameArea', theCharacter)
    //     return (
    //         <div>
    //             <p>{theCharacter.name}</p>
    //             <img width= "450" height= "450" src= {mans} alt="img placeholder"></img>

    //         </div>
    //     )
    // }
    if (!theCharacter) {
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
                <p>{theCharacter}</p>
            </div>
            <div>
                store
            </div>
        </>
    )
}

export default GameArea