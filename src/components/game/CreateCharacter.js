const CreateCharacter = (props) => {
    console.log('props in CreateCharacter', props)

    return(
        <>
            <form>
            <h2>What's your hero's name?</h2>
            <input type="text" placeholder="enter hero name"></input>
            <h2>Choose your hero model:</h2>
            <div>
                Class images go here
            </div>
            <input type="submit"></input>
            </form>
        </>
    )
}