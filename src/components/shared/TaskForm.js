import React from 'react'

const TaskForm = (props) => {

    const {task, handleChange, handleSubmit} = props
    console.log('this is props in TaskForm', props)
    return (
        <>
            <form 
                onSubmit={handleSubmit}      
            >
                Task title: 
                    <input 
                        type="text" 
                        name='title'
                        value={task.title}
                        onChange={handleChange}
                    />
                <br/>
                Task description: 
                    <input 
                        type="text" 
                        name='description'
                        value={task.description}
                        onChange={handleChange}
                    />
                <br/>
                Coins: 
                    <input 
                        type="number" 
                        name='coins'
                        value={task.coins}
                        onChange={handleChange}
                    />  
                <br/>
                <input 
                    type="submit" 
                    value="Create task"    
                />
            </form>
        </>
    )
}

export default TaskForm