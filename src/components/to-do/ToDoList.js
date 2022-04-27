import Task from './Task'
import {Link} from 'react-router-dom'

const ToDoList = (props) => {
    console.log('this is props in ToDoList', props)
    return(
        <>
            <div>
                <h1>Today's To-Dos:</h1>
                <ul>
                    <li><Task /></li>
                </ul>
                <Link to='/task/create'>Add new task</Link>
            </div>
        </>
    )
}

export default ToDoList