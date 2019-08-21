import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			email: '',
			password: '',
			image: ''
		}
	}

	handleChange = (e) => {
		if(e.currentTarget.name !== 'image') {
			this.setState({
				[e.currentTarget.name]: e.currentTarget.value
			});
		} else {
			console.log(e.currentTarget.files[0]);
			this.setState({
				image: e.currentTarget.files[0]
			});
		}
	}

	handleSubmit = async(e) => {
		e.preventDefault();

		const data = new FormData();
		data.append('file', this.state.image);
		data.append('username', this.state.username);
		data.append('email', this.state.email);
		data.append('password', this.state.password);

		console.log(data.entries(), '<-data from Register');
		for(let pair of data.entries()) {
			console.log(pair[0] ,', ', pair[1]);
		}

		const registerCall = this.props.register(data);

		registerCall.then((data) => {
			console.log(data);
			if(data.status.message === 'Success!') {
				this.props.history.push('/profile')
			} else {
				console.log(data, '<-should be error message in registerCall');
			}
		})
	}

	render() {
		return (
			<Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}} >
				<Grid.Column style={{ maxWidth: 450 }} >
					<Header as='h2' textAlign='center' >
						Register
					</Header>
					<Form onSubmit={this.handleSubmit} >
						<Segment stacked>
						Username:
						<Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange} />
						Email:
						<Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange} />
						Password:
						<Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange} />
						Image:
						<Form.Input fluid icon='image' iconPosition='left' type='file' name='image' onChange={this.handleChange} />
						<Button fluid size='large' type='submit'>Register</Button>
						<Message>
							Already A Member? <Link to='/Login'>Login</Link>
						</Message>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
			)
	}
}

export default Register;