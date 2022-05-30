import React from 'react'
import { Form, FormField, TextInput, Button, Box, Select, Text } from 'grommet'

const TaskForm = (props) => {

    const {task, handleChange, handleSubmit} = props
    console.log('this is props in TaskForm', props)
    return (
        <Box
            direction="column"
			border={{ color: 'brand', size: 'large' }}
			pad="medium"
			margin={{
			    top: "3em",
				left: "40em",
				right: "40em",
			}}
        >
            <Form 
                onSubmit={handleSubmit}      
            >
                <FormField label="Task title: ">
                    <TextInput 
                        placeholder="title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </FormField>
                <FormField label="Task description: ">
                    <TextInput 
                        placeholder="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </FormField>
                <br/>
                <FormField label="Coins: "> 
                    <Select 
                        options={ [1, 2, 3] }
                        placeholder="choose a coin amount"
                        name='coins'
                        onChange={handleChange}
                    />
                </FormField>
                <br/>
                <Button
                    primary 
                    type="submit" 
                    label="Create task"    
                />
            </Form>
        </Box>
    )
}

export default TaskForm