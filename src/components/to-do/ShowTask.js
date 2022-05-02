import React, {useState, useEffect} from 'react'
import { getOneTask, updateTask } from '../../api/task'
import { useParams, useNavigate } from 'react-router-dom'


const ShowTask = (props) => {

    const [task, setTask] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { taskId } = useParams()
    const navigate = useNavigate()
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneTask(user, taskId)
            .then(res => {
                console.log('this is res in ShowTask', res)
                setTask(res.data.task)
            })
            .then(() => {
                // msgAlert({
                //     heading: 'Here is the pet!',
                //     message: showPetSuccess,
                //     variant: 'success',
                // })
                console.log('---task shown---')
            })
            .catch(() => {
                // msgAlert({
                //     heading: 'No pet found',
                //     message: showPetFailure,
                //     variant: 'danger',
                // })
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
//this is to fix shanes code