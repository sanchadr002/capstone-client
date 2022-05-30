import { useNavigate } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, FormField, Button, Box, Heading, Text } from 'grommet'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
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
                <Heading level="2">Are you sure you want to sign out?</Heading>
                <Text size="small" margin="small">We hate to see you go...</Text><br/>    
                <Button margin="small" primary onClick={onSignOut} label="Sign Out"/>
                <Button margin="small" secondary onClick={onCancel} label="Cancel"/>    
            </Box>
		</>
	)
}

export default SignOut
//this is to fix shanes code