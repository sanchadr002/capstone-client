import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, FormField, Button, Box, Heading, TextInput } from 'grommet'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props
        const credentials = {email, password}
		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <Box
            direction="column"
            border={{ color: 'brand', size: 'large'}}
            pad="medium"
            align="center"
			margin={{
				top: "3em",
				left: "30em",
				right: "30em"
			}}
        >
            <Heading>Sign In</Heading>
            <Form onSubmit={onSignIn}>
                <FormField label="Email address">
                    <TextInput 
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormField>
                <FormField label="Password">
                    <TextInput 
                        required
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormField>
                {/* <Form.Control
                        required
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        required
                        name='password'
                        value={password}
                        type='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    /> */}
                <Button 
                    primary 
                    type='submit' 
                    label="Sign In"   
                />
            </Form>
        </Box>
    )
}

export default SignIn