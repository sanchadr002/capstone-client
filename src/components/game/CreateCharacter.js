import React, {useState} from 'react'
import { patchCharacter } from '../../api/character'
import CharacterForm from './CharacterForm'

const CreateCharacter = (props) => {
    const { user } = props
    const [character, setChar] = useState(user.playerCharacter)
    const handleChange = (e) => {
        // e === event
        e.persist()
        setChar(prevChar => {
            const name = e.target.name
            console.log('this is e.target.name', name)
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
            // then we send a success message
            .then(() =>
                console.log('---character patched---')
            )
            // if there is an error, we'll send an error message
            .catch(() =>
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