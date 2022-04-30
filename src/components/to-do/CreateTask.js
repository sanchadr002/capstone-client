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
            // const description = e.target.description
            // const coins = e.target.coins
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
            // .then(res => {navigate(`/task/${res.data.task.id}`)})
            // then we send a success message
            .then(res => {
                // msgAlert({
                //     heading: 'Pet Added! Success!',
                //     message: createPetSuccess,
                //     variant: 'success',
                // })
                console.log('this is res in CreateTask', res)
                console.log('---task created---')
                // navigate(`/task/${res.data.task._id}`)
                navigate(`/todolist`)
            })
            // if there is an error, we'll send an error message
            .catch(() =>
                // msgAlert({
                //     heading: 'Oh No!',
                //     message: createPetFailure,
                //     variant: 'danger',
                // })
                console.log('---task not created---')
            )
        // console.log('this is the pet', pet)
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