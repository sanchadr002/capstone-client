import React from 'react'

const CharacterForm = (props) => {
    const {character, handleChange, handleSubmit} = props
    console.log('this is props in CharacterForm', props)
    return (
        <>
            <form 
                onSubmit={handleSubmit}
                 
            >
                Character name: 
                    <input 
                        type="text" 
                        name='name'
                        value={character.name}
                        onChange={handleChange}
                    />
                <br/>
                Character Job: 
                    <input 
                        type="text" 
                        name='job'
                        value={character.job}
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