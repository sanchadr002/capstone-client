import Task from './Task'

const ToDoList = (props) => {
    console.log('this is props in ToDoList', props)
    return(
        <>
            <div>
                <h1>Today's To-Dos:</h1>
                <ul>
                    <li><Task /></li>
                </ul>
            </div>
        </>
    )
}

export default ToDoList