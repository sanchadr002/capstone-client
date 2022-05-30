import Task from './Task'
import {Link} from 'react-router-dom'
import React from 'react'
import { Box, Button, Heading, Anchor } from 'grommet'

const ToDoList = (props) => {
    console.log('this is props in ToDoList', props)
    const { user } = props
    return(
        <>
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
                <Heading margin="small" level="1">Today's To-Dos:</Heading>
                <Box>
                    <Task user={user}/>
                </Box>
                <Anchor 
                    margin="small" 
                    as={Link} 
                    to="/task/create" 
                    label="Add new task"
                />
            </Box>
        </>
    )
}

export default ToDoList
