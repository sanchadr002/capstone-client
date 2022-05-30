import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {patchCharacter} from '../../api/character'
import { Box, Form, FormField, Button, Heading, Card, CardHeader, CardBody, CardFooter, Text } from 'grommet'

const Store = (props) => {
    const {user} = props
    const [store, setStore] = useState(null)
    console.log('this is props in game page', props)
    console.log('this is user.playerStore', user.playerStore)
    useEffect(() => {
        setStore(user.playerStore.inventory)
    }, [])
    let storeIndex
    if (store) {
        console.log('this is store', store)
        storeIndex = store.map(item => {
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            console.log('this is the item in Store', item)
            const handleClick = (e) => {
                // e === event
                e.preventDefault()
                console.log('this user in store', user) 
                console.log('the owned items', user.playerCharacter.ownedItems)
                console.log('this is user.playerCharacter.coins pre-transaction', user.playerCharacter.coins)
                user.playerCharacter.coins -= item.item.cost
                user.playerCharacter.ownedItems.push(item)
                patchCharacter(user, user.playerCharacter)
                    .then(() => {
                        console.log('---item added---')
                    })
                    .catch(err => console.log(err))
                console.log('this is user.playerCharacter.coins post-transaction', user.playerCharacter.coins)
                console.log('this is the players inventory', user.playerCharacter.ownedItems)
            }
            return(
                <Card 
                    height="small" 
                    width="medium" 
                    background="light-1"
                    pad="small"
                    margin="small"
                >
                    <CardHeader pad="small">
                        <Text weight="bold">{item.item.description}</Text>
                    </CardHeader>
                    <CardBody pad="small">{item.item.cost} coins</CardBody>
                    <CardFooter 
                        pad="small" 
                        background="light-2"
                    >
                        <Button 
                            secondary 
                            label="Buy" 
                            as="button" 
                            style={{ 
                                display: item.item.bought ? "none": "inline-block",  
                            }}
                            onClick={handleClick} 
                            name='buy'
                        />
                    </CardFooter>
                </Card>
            )
        })
        console.log('this is storeIndex', storeIndex)
    }
    if (!store) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }
    return(
        <Box
            direction="column"
            border={{ color: 'brand', size: 'large'}}
            pad="medium"
            align="center"
			margin={{
				top: "3em",
				left: "30em",
				right: "30em"
			}}
        >
        <Heading>
            {user.playerCharacter.name}'s Personal Shop
        </Heading>
            {storeIndex}
        </Box>
    )
}
export default Store