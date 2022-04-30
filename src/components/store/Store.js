import React, { useState, useEffect} from 'react'
import { Spinner, Container } from 'react-bootstrap'
import {getStore} from '../../api/store'

// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const Store = (props) => {

    const [store, setStore] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user} = props
    console.log('this is props in game page', props)
    useEffect(() => {
        getStore(user)
        .then(res => {setStore(res.data.store)
            console.log('this is store', store)
        })
        
        .catch((error) => {
            console.log(error)
        })
    }, [updated])


    if (store) {
        return (
            <p>{store.inventory}</p>
        )
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
        <>
            <div>
                Store area
                <p>{store}</p>
            </div>
        </>
    )
}

export default Store