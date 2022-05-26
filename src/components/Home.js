import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Page, PageContent, Paragraph, Heading, Footer, Anchor } from 'grommet'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<Box 
				direction="row"
				border={{ color: 'brand', size: 'large' }}
				pad="medium"
				margin={{
					top: "3em",
					left: "30em",
					right: "30em"
				}}
			>
				<Page kind="narrow">
					<PageContent background="light-3">
					<Heading margin="non">Welcome to the Home Hero app!</Heading>
						<Paragraph>
							Home Hero is a gamified daily to-do list app where users can get in-app coins for completing tasks, and spend those coins on customizing their in-app home area.<br/>
							Here's how to get started:<br/>
							Sign-up or log-in,<br/>
							If it's your first time using Home Hero, you'll have to choose your character and give them a name,<br/>
							Check in with today's to-do list and check off your completed tasks or create new ones,<br/>
							Get your coins and get to customizing your character's home area!
						</Paragraph>
						<Footer background="brand" pad="medium">
							<Anchor as={Link} to="character/create" label="Edit your character" />
							<Anchor as={Link} to="todolist" label="View and create your tasks" />
							<Anchor as={Link} to="character/view" label="View your hero's home" />
							<Anchor as={Link} to="store/view" label="Visit your hero's store" />
						</Footer>
					</PageContent>
				</Page>
			</Box>
		</>
	)
}

export default Home