import Task from './Task'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import RequireAuth from '../shared/RequireAuth'

const ToDoList = (props) => {
    console.log('this is props in ToDoList', props)
    const { user } = props
    return(
        <>
            <div>
                <h1>Today's To-Dos:</h1>
                <ul>
                    <Task user={user}/>
                </ul>
                <Link to='/task/create'>Add new task</Link>
            </div>
        </>
    )
}

export default ToDoList