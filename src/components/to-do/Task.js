import React, { useState, useEffect } from 'react'
import {getAllTasks} from '../../api/task'
import { useNavigate } from 'react-router-dom'
import { patchCharacter } from '../../api/character'
import { completeTask, deleteTask } from '../../api/task'
import { Card, CardHeader, CardBody, CardFooter, Text, Button } from 'grommet'

const Task = (props) => {
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
                    <Card
                        height="medium"
                        width="medium"
                        pad="medium"
                        background="light-1"
                        margin="small"
                    >
                        <CardHeader pad="small">
                            <Text weight="bold">{task.title}</Text>
                        </CardHeader>
                            <CardBody pad="small">
                                <Text margin={{bottom:"small"}}>Description: {task.description}</Text>
                                <li style={{ display: task.completed ? "none": "block" }}>Coins: {task.coins}</li>
                                <li style={{ display: task.completed ? "block": "none" }}>Task is complete!</li>
                            </CardBody>
                        <CardFooter
                            pad="small"
                            background="light-2"
                        >
                            <Button  
                                secondary
                                style={{ display: task.completed ? "none": "inline-block" }} 
                                onClick={handleClick} 
                                name='completed'
                                label="Mark As Completed"
                            />
                            <Button
                                secondary
                                onClick={handleDelete}
                                name='delete'
                                label="Delete Task"
                            />
                        </CardFooter>
                    </Card><br/>
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