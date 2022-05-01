import React, { useState, useEffect } from 'react'
import {getAllTasks} from '../../api/task'
import { Link, useLocation } from 'react-router-dom'
import { getOneTask } from '../../api/task'
import { getTheCharacter } from '../../api/character'

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
                }, 
                [])
                
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
                e.preventDefault()
                //access task.coins 
                // if (user.)
                user.playerCharacter.coins += task.coins
                task.coins -= task.coins
                task.coins = 0
                console.log('this is user.playerCharacter.coins', user.playerCharacter.coins)
                // .then((character) => {
                //     character.coins += task.coins
                //     task.coins -= task.coins
                // })
                //push task.coins to user.coins
                //subtract task.coins from itself
            }
            // if ({task.completed} === true){
                                
            //     user.playerCharacter.coins += task.coins
            //     task.coins -= task.coins
            //     taskDone = true
            //     console.log('this is user.playerCharacter.coins', user.playerCharacter.coins)
            // }
            // else if (task === true) {
            //     const but = document.getElementById('but')
            //     but.style.display = "none"
            //     console.log('the task is already done')
            // }

            return(
                <>
                    <form>
                        <header>Title: {task.title}</header>
                        <li>Description: {task.description}</li>
                        <li>Coins: {task.coins}</li>
                        <button id="but" onClick={handleClick} name='completed'>Completed</button>
                    </form>
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