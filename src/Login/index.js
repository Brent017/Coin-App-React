import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const login = this.props.logIn(this.state);

		login.then((data) => {
			if(data.status.message === 'Success!') {
				this.props.history.push('/profile')
			} else {
				console.log(data, this.props);
			}
		})
	}

	render() {
		return (
			<Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
				<Grid.Column style={{ maxWidth: 450}}>
					<Header as='h2' textAlign='center'>
						Login:
					</Header>
					<Form onSubmit={this.handleSubmit} >
						<Segment stacked >
						Email:
						<Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange} />
						<Button fluid size='large' type='submit'>Login</Button>
						<Message>
							Not registered? <Link to='/register'>Register Now</Link>
						</Message>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
			)
	}
}

export default Login;