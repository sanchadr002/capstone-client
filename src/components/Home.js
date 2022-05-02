const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Welcome to the Home Hero app!</h2>
			<p>Home Hero is a gamified daily to-do list app where users can get in-app coins for completing tasks, and spend those coins on customizing their in-app home area.<br/>
				Here's how to get started:<br/>
				Sign-up or log-in,<br/>
				If it's your first time using Home Hero, you'll have to choose your character and give them a name,<br/>
				Check in with today's to-do list and check off your completed tasks or create new ones,<br/>
				Get your coins and get to customizing your character's home area!

			</p>
		</>
	)
}

export default Home
//this is to fix shanes code