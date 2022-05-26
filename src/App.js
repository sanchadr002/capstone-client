// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import AppBar from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import GameArea from './components/game/GameArea'
import ToDoList from './components/to-do/ToDoList'
import CreateTask from './components/to-do/CreateTask'
import Store from './components/store/Store'
import ShowTask from './components/to-do/ShowTask'
import CreateCharacter from './components/game/CreateCharacter'

const App = () => {

	const [user, setUser] = useState(null)
	// const [character, setCharacter] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	console.log('user in app', user)
	console.log('message alerts', msgAlerts)

	const clearUser = () => {
		console.log('clear user ran')
    	setUser(null)
  	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      		)
		})
	}

	// const theCharacter = ({name, theClass, coins, sprite, ownedItems, owner}) => {
	// 	setCharacter(() => {
	// 		return(
	// 			{ name, theClass, coins, sprite, ownedItems, owner }
	// 		)
	// 	})
	// }

	return (
		<Fragment>
			<AppBar user={user} />
			<Routes>
				<Route path='/' 
					element={
						<Home 
							msgAlert={msgAlert} 
							user={user} 
						/>
					} 	
				/>
				<Route
					path='/sign-up'
					element={
						<SignUp 
							msgAlert={msgAlert} 
							setUser={setUser} 
						/>
					}
				/>
				<Route
					path='/sign-in'
					element={
						<SignIn 
							msgAlert={msgAlert} 
							setUser={setUser} 
						/>
					}
				/>
          		<Route
            		path='/sign-out'
            		element={
              			<RequireAuth user={user}>
                			<SignOut 
								msgAlert={msgAlert} 
								clearUser={clearUser} 
								user={user} 	
							/>
              			</RequireAuth>
            		}
          		/>
          		<Route
            		path='/change-password'
            		element={
              			<RequireAuth user={user}>
                			<ChangePassword 
								msgAlert={msgAlert} 
								user={user} 
							/>
              			</RequireAuth>
					}
          		/>
		  		<Route
            		path='/character/view'
           			element={
              			<RequireAuth user={user}>
                			<GameArea user={user} />
              			</RequireAuth>
            		}
				/>
				<Route 
					path='/character/create'
					element={
						<RequireAuth user={user}>
							<CreateCharacter user={user} />
						</RequireAuth>
					}
				/>
				<Route 
					path='/todolist'
					element={
						<RequireAuth user={user}>
							<ToDoList user={user} />
						</RequireAuth>
					}
				/>
				<Route 
					path='/task/:id'
					element={
						<RequireAuth user={user}>
							<ShowTask user={user}/>
						</RequireAuth>
					}
				/>
				<Route
					path='/task/create'
					element={
						<RequireAuth user={user}>
							<CreateTask user={user}/>
						</RequireAuth>
					}
				/>
				<Route 
					path='/store/view'
					element={
						<RequireAuth user={user}>
							<Store   msgAlert={msgAlert} 
									 user={user}/>
						</RequireAuth>
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
