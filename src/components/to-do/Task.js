import React, { useState, useEffect } from 'react'
import {getAllTasks} from '../../api/task'
import { Link, useLocation } from 'react-router-dom'


const Task = (props) => {
    const { state } = useLocation()
    const [tasks, setTasks] = useState(null)
    const { user } = props
    useEffect(() => {
        getAllTasks(user)
            .then(res => {
                console.log('this is res.data.tasks in Task.js', res.data.tasks)
                setTasks(res.data.tasks)
                console.log('this is tasks', tasks)
            })
            .then(() =>
                // msgAlert({
                //     heading: 'Success!',
                //     message: `Favorites shown!`,
                //     variant: 'success',
                // })
                console.log('tasks displayed')
            )
            .catch(()=> {
                // msgAlert({
                //     heading: 'Oh No!',
                //     message: 'Issue with retrieving favorites',
                //     variant: 'danger',
                // })
                console.log('tasks not displayed')
            })
    }, [])

    if (!tasks) {
        return <p>loading...</p>
    } else if (tasks.length === 0) {
        return <p>no tasks yet, go add some</p>
    }


    let taskIndex

    if (tasks.length > 0) {
        // petsJsx = pets.map(pet => (
        //     <li key={pet.id}>
        //         {pet.fullTitle}
        //     </li>
        // ))
        taskIndex = tasks.map(task => (
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            <>
                <header>Title: {task.title}</header>
                <li>Description: {task.description}</li>
                <li>Coins: {task.coins}</li>
            </>
        ))
    }
    
    return(
        <>
            {taskIndex}
        </>
    )
}

export default Task