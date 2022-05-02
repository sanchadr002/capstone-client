import React, {useState, useEffect} from 'react'
import { getOneTask } from '../../api/task'
import { useParams } from 'react-router-dom'


const ShowTask = (props) => {

    const [task, setTask] = useState(null)
    const {user} = props
    const { taskId } = useParams()
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneTask(user, taskId)
            .then(res => {
                console.log('this is res in ShowTask', res)
                setTask(res.data.task)
            })
            .then(() => {
                console.log('---task shown---')
            })
            .catch(() => {
                console.log('---task not shown---')
            })
    }, [])
    
    if (task) {
        return (
            <>
                <div>
                    <header>{task.title}</header>
                    <small>Description: {task.description}</small><br/>
                    <small>Coins: {task.coins}</small><br/>
                    <button>
                        Edit Task
                    </button>
                </div>
            </>
        )
    }

    if (!task) {
        return (
            <p>loading</p>
        )
    }

    return (
        {task}
    )
}

export default ShowTask