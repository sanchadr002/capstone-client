import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Box, Grommet, Nav, Anchor } from 'grommet'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const authenticatedOptions = (
	<>
		{/* <Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="change-password" label="Change Password"/>
		{/* <Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="sign-out" label="Sign Out"/>
		{/* <Nav.Item>
			<Link to='todolist' style={linkStyle}>
				Your To-Do-List
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="todolist" label="Your To-Do List"/>
		{/* <Nav.Item>
			<Link to='character/create' style={linkStyle}>
				Create Your Home Hero
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="character/create" label="Create Your Home Hero"/>
		{/* <Nav.Item>
			<Link to='character/view' style={linkStyle}>
				Your Hero's Home
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="character/view" label="Your Hero's Home"/>
		{/* <Nav.Item>
            <Link to='store/view' style={linkStyle}>
                Your Hero's Store
            </Link>
        </Nav.Item> */}
		<Anchor as={Link} to="store/view" label="Your Hero's Store"/>
	</>
)

const unauthenticatedOptions = (
	<>
        {/* <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item> */}
		<Anchor as={Link} to="sign-up" label="Sign Up"/>
        {/* <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item> */}
		<Anchor as={Link} to="sign-in" label="Sign In"/>
	</>
)

const alwaysOptions = (
	<>
		{/* <Nav.Item>
			<Link to='/' style={linkStyle}>
				About Home Hero
			</Link>
		</Nav.Item> */}
		<Anchor as={Link} to="/" label="About Home Hero"/>
	</>
)

const AppBar = ({ user }) => (
	// <Box 
	// 	tag='header'
	// 	direction='row'
	// 	align='center'
	// 	justify='between'
	// 	background='brand'
	// 	pad={{ left: 'medium', right: 'small', vertical: 'small'}}
	// 	elevation='medium'
	// 	style={{ zIndex: '1' }}
	// 	{...user}
	// />
	<Nav direction="row" background="brand" pad="medium">
		<Anchor as={Link} to="/" label="Home Hero"/>
		{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
		{alwaysOptions}
		{user ? authenticatedOptions : unauthenticatedOptions}
	</Nav>
)

// const Header = ({ user }) => (
// 	<Navbar bg='primary' variant='dark' expand='md'>
// 		<Navbar.Brand>
//             <Link to='/' style={linkStyle}>
//                 Home Hero
//             </Link>
//         </Navbar.Brand>
// 		<Navbar.Toggle aria-controls='basic-navbar-nav' />
// 		<Navbar.Collapse id='basic-navbar-nav'>
// 			<Nav className='ml-auto'>
				// {user && (
				// 	<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				// )}
				// {alwaysOptions}
				// {user ? authenticatedOptions : unauthenticatedOptions}
// 			</Nav>
// 		</Navbar.Collapse>
// 	</Navbar>
// )

export default AppBar