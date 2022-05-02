import React, {useState} from 'react'
import {patchCharacter} from '../../api/character'
import CharacterForm from './CharacterForm'

const CreateCharacter = (props) => {
    const { user } = props
    const [character, setChar] = useState(user.playerCharacter)

    // useEffect(() => {
    //     getTheCharacter(user)
    //     .then((res) => {
    //         console.log('this is res in Createcharacter', res)
    //         setChar(res.data.character)
    //     })
    // })

    const handleChange = (e) => {
        // e === event
        e.persist()

        setChar(prevChar => {
            const name = e.target.name
            console.log('this is e.target.name', name)
            // const description = e.target.description
            // const coins = e.target.coins
            let value = e.target.value
            console.log('etarget type', e.target.type)

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            return {...prevChar, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the character to submit', character)
        patchCharacter(user, character)
            // // if create is successful, we should navigate to the show page
            // .then(() => handleClose())
            // then we send a success message
            .then(() =>
                // msgAlert({
                //     heading: 'Pet Updated! Success!',
                //     message: 'u did it',
                //     variant: 'success',
                // })
                console.log('---character patched---')
            )
            // if there is an error, we'll send an error message
            .catch(() =>
                // msgAlert({
                //     heading: 'Oh No!',
                //     message: 'that aint it',
                //     variant: 'danger',
                // })
                console.error()
            )
    }

    return (
    
        
        <>

                <CharacterForm 
                    character={character}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    
                />
        </>
        
    
    )
}

export default CreateCharacter