import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, FormField, Button, Box, Heading, TextInput } from 'grommet'

const ChangePassword = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		oldPassword: '',
	// 		newPassword: '',
	// 	}
	// }
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate()

	const onChangePassword = (event) => {
		event.preventDefault()

		const { msgAlert, user } = props
        console.log('the user', user)
        

        const passwords = {oldPassword, newPassword}

		changePassword(passwords, user)
			.then(() =>
				msgAlert({
					heading: 'Change Password Success',
					message: messages.changePasswordSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
				setOldPassword('')
                setNewPassword('')
				msgAlert({
					heading: 'Change Password Failed with error: ' + error.message,
					message: messages.changePasswordFailure,
					variant: 'danger',
				})
			})
	}



    return (
        <Box
            direction="column"
			border={{ color: 'brand', size: 'large' }}
			pad="medium"
			margin={{
				top: "3em",
				left: "35em",
				right: "35em"
			}}
        >
                <Heading level="3">Change Password</Heading>
                <Form onSubmit={onChangePassword}>
                        <FormField label="Old password">
                            <TextInput 
                                required
                                name="oldPassword"
                                type="password"
                                placeholder="Enter old password"
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                            />
                        </FormField>
                        {/* <Form.Control
                            required
                            name='oldPassword'
                            value={oldPassword}
                            type='password'
                            placeholder='Old Password'
                            onChange={e => setOldPassword(e.target.value)}
                        /> */}
                        <FormField label="New password">
                            <TextInput 
                                required
                                name="newPassword"
                                value={newPassword}
                                type="password"
                                placeholder="Enter new password"
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </FormField>
                        {/* <Form.Control
                            required
                            name='newPassword'
                            value={newPassword}
                            type='password'
                            placeholder='New Password'
                            onChange={e => setNewPassword(e.target.value)}
                        /> */}
                    <Button 
                        type='submit'
                        label="Change Password"
                    />
                </Form>
        </Box>
    )
}

export default ChangePassword
//this is to fix shanes code