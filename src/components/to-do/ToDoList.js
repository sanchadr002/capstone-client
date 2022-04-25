const ToDoList = (props) => {
    console.log('this is props in ToDoList', props)
    return(
        <>
            <div>
                <h1>Today's To-Dos:</h1>
                <ul>
                    <li>task list goes here</li>
                </ul>
            </div>
        </>
    )
}

export default ToDoList