const CreateTaskForm = (props) => {
    console.log('this is props in CreateTaskForm', props)
    return(
        <>
            <form>
                Task title: <input type="text" /><br/>
                Task description: <input type="text" /><br/>
                Coins: <input type="number" /><br/>
                <input type="submit" />
            </form>
        </>
    )
}

export default CreateTaskForm