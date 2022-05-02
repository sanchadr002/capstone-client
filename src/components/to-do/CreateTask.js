import { createTask } from '../../api/task'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../shared/TaskForm'
import React, { useState } from 'react'

const CreateTask = (props) => {
    
    const { user } = props
    const navigate = useNavigate()
    const [task, setTask] = useState({title: '', description: '', coins: 0})
    console.log('task in create', task)
    const handleChange = (e) => {
        // e === event
        e.persist()
        setTask(prevTask => {
            const name = e.target.name
            console.log('this is e.target.name', name)
            let value = e.target.value
            console.log('etarget type', e.target.type)
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }
            return {...prevTask, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        createTask(user, task)
            // if create is successful, we should navigate to the show page
            // then we send a success message
            .then(res => {
                console.log('this is res in CreateTask', res)
                console.log('---task created---')
                navigate(`/todolist`)
            })
            // if there is an error, we'll send an error message
            .catch(() =>
                console.log('---task not created---')
            )
    }
    return(
        <TaskForm 
            task={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CreateTask