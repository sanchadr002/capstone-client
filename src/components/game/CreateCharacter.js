import React from 'react'
import {patchCharacter} from '../../api/character'

const CreateCharacter = (props) => {
    const { user, updateCharacter } = props
    const [character, setChar] = useState(user.playerCharacter)

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
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                // msgAlert({
                //     heading: 'Oh No!',
                //     message: 'that aint it',
                //     variant: 'danger',
                // })
                console.error()
            )
        console.log('this is the pet', pet)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <PetForm 
                    pet={pet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit pet!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CreateCharacter