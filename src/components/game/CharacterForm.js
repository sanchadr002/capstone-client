import React from 'react'

const CharacterForm = (props) => {

    const {character, handleChange, handleSubmit} = props
    console.log('this is props in CharacterForm', props)
    return (
        <>
            <form 
                name='character'
                onSubmit={handleSubmit}
            >
                Character name: 
                    <input 
                        type="text" 
                        value={character.name}
                        name='name'
                        onChange={handleChange}
                    />
                <br/>
                Character class: 
                    <input 
                        type="text" 
                        value={character.class}
                        name='class'
                        onChange={handleChange}
                    />
                <br/>
                <input 
                    type="submit" 
                    value="Create character"    
                />
            </form>
        </>
    )
}

export default CharacterForm