import React, { useState, useEffect } from 'react'
import {getAllTasks} from '../../api/task'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { getOneTask } from '../../api/task'
import { patchCharacter } from '../../api/character'
import { completeTask, deleteTask } from '../../api/task'

const Task = (props) => {
    const { state } = useLocation()
    const [tasks, setTasks] = useState(null)
    const [show, setShow] = useState(true)
    const { user } = props
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
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
        }, 
    [updated])

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
        taskIndex = tasks.map(task => {
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            console.log('this is task in Task', task)
            const handleClick = (e) => {
                // e === event
                console.log('this is the task _id pre-update', task._id)
                e.preventDefault()
                //access task.coins
                completeTask(user,task)
                .then(() => {navigate(`/todolist`)})
                .catch(() => {
                    console.log('no update')
                })
                user.playerCharacter.coins += task.coins
                task.coins -= task.coins
                patchCharacter(user, user.playerCharacter)
                .then(() => {
                    console.log('---coins added---')
                })
                .catch(err => console.log(err))
                console.log('this is user.playerCharacter.coins', user.playerCharacter.coins)
                console.log('this is if the task is completed or not', task.completed)
                // .then((character) => {
                //     character.coins += task.coins
                //     task.coins -= task.coins
                // })
                //push task.coins to user.coins
                //subtract task.coins from itself
                // const handleStyle = setShow((s) => !s)
            }
            const handleDelete = (e) => {
                e.preventDefault()
                deleteTask(user, task._id)
                .then(() => {navigate('/todolist')})
                .catch(() => {
                    console.log('task not deleted')
                })
            }
            return(
                <>
                    <form key={task._id}>
                        <header>Title: {task.title}</header>
                        <li>Description: {task.description}</li>
                        <li style={{ display: task.completed ? "none": "block" }}>Coins: {task.coins}</li>
                        <li style={{ display: task.completed ? "block": "none" }}>Task is complete!</li>
                        <button  
                            // style={{ display: show ? "inline-block" : "none" }} 
                            style={{ display: task.completed ? "none": "inline-block" }} 
                            onClick={handleClick} 
                            name='completed'
                        >
                            Completed
                        </button>
                        <button
                            onClick={handleDelete}
                            name='delete'
                        >
                            Delete Task
                        </button>
                    </form><br/>
                </>
            )
        })
    }
    
    return(
        <>
            {taskIndex}
        </>
    )
}

export default Task
//this is to fix shanes code
