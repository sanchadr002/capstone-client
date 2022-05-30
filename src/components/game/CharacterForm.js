import React from 'react'
import { Form, FormField, TextInput, Button, Box } from 'grommet'

const CharacterForm = (props) => {

    const {character, handleChange, handleSubmit} = props
    console.log('this is props in CharacterForm', props)
    return (
        <Box
            direction="row"
			border={{ color: 'brand', size: 'large' }}
			pad="medium"
			margin={{
				top: "3em",
				left: "30em",
				right: "30em"
			}}
        >
            <Form 
                name='character'
                onSubmit={handleSubmit}
            >
                <FormField label="Character Name: ">
                    <TextInput 
                        placeholder={character.name}
                        value={character.name}
                        onChange={handleChange}
                        name="name"
                    />
                </FormField>
                <br/>
                <FormField label="Character Class: ">
                    <TextInput
                        placeholder={character.class}
                        value={character.class}
                        onChange={handleChange}
                        name="class"
                    />
                </FormField>
                <Button 
                    primary
                    type="submit" 
                    label="Create character"    
                />
            </Form>
        </Box>
    )
}

export default CharacterForm