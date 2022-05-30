import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import mans from '../../srcImg/mans.png'
import { Box, Text, Image, List, Heading } from 'grommet'

const GameArea = (props) => {
    const {user} = props
    const [character, setCharacter] = useState(user.playerCharacter)
    console.log('this is props in game page', props)
    useEffect(() => {
        setCharacter(user.playerCharacter)
    })
    if (character){
        let itemIndex
        console.log('this is character in GameArea', character)
        if (character.ownedItems){
            itemIndex = character.ownedItems.map(item => {
                console.log('this is item in GameArea', item)
                return (
                    <Box margin="xxsmall">
                        <Text size="small"><br/>{item.item.description}<br/></Text>
                    </Box>
                )
            })
        }
        return (
            <Box
                direction="column"
			    border={{ color: 'brand', size: 'large' }}
			    pad="medium"
			    margin={{
				    top: "3em",
				    left: "35em",
				    right: "35em"
			    }}
            >
                <Heading margin="auto">{character.name}</Heading>
                <List 
                    primaryKey="label"
                    secondaryKey="value"
                    data={[
                        { label: "Character class: ", value: `${character.class}` },
                        { label: "Character coins: ", value: `${character.coins}` },
                    ]}
                />
                <Text>Character inventory: {itemIndex}</Text>
                <Image 
                    fit="contain"
                    src={mans} 
                    alt="img placeholder"
                />
            </Box>
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
        </>
    )
}

export default GameArea