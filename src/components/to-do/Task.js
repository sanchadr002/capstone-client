import React, { useState, useEffect } from 'react'
import {getAllTasks} from '../../api/task'
<<<<<<< HEAD
import { useNavigate, useLocation } from 'react-router-dom'
=======
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { getOneTask } from '../../api/task'
import { patchCharacter } from '../../api/character'
>>>>>>> f92747990ac065bc433f49d9aa0145e22b1be10f
import { completeTask } from '../../api/task'

const Task = (props) => {
    const { state } = useLocation()
    const [tasks, setTasks] = useState(null)
    const { user } = props
    const navigate = useNavigate()
    useEffect(() => {
        getAllTasks(user)
            .then(res => {
                console.log('this is res.data.tasks in Task.js', res.data.tasks)
                setTasks(res.data.tasks)
                console.log('this is tasks', tasks)
            })
            .then(() =>
                console.log('tasks displayed')
            )
            .catch(()=> {
                console.log('tasks not displayed')
            })
        }, 
    [])

    if (!tasks) {
        return <p>loading...</p>
    } else if (tasks.length === 0) {
        return <p>no tasks yet, go add some</p>
    }


    let taskIndex

    if (tasks.length > 0) {
        taskIndex = tasks.map(task => {
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            console.log('this is task in Task', task)
            const handleClick = (e) => {
                // e === event
                console.log('this is the task _id pre-update', task._id)
                e.preventDefault()
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
            }
            return(
                <>
                    <form key={task._id}>
                        <header>Title: {task.title}</header>
                        <li>Description: {task.description}</li>
                        <li style={{ display: task.completed ? "none": "block" }}>Coins: {task.coins}</li>
                        <li style={{ display: task.completed ? "block": "none" }}>Task is complete!</li>
                        <button   
                            style={{ display: task.completed ? "none": "inline-block" }} 
                            onClick={handleClick} 
                            name='completed'
                        >
                            Completed
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