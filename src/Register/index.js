import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			email: '',
			password: '',
			image: {}
		}
	}

	handleChange = (e) => {
		// console.log(e.currentTarget);
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

		console.log(data.entries(), '<-this is data from Register');
		// console.log(e);
		// for(let pair of data.entries()) {
		// 	console.log(pair[0] ,', ', pair[1], '<-each key value pair');
		// }
		console.log(data, 'before registerFunction');
		const registerFunction = this.props.register(data);

		registerFunction.then((data) => {
			console.log(data, 'data in registerFunction');
			if(data.status.message === 'Success!') {
				this.props.history.push('/profile')
			} else {
				console.log(data, '<-should be error message in registerFunction');
			}
		})
	}

	render() {
		return (
			<Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}} >
				<Grid.Column style={{ maxWidth: 450 }} >
					<Header as='h2' textAlign='center' >
						<img src='https://vignette.wikia.nocookie.net/pawnstarsthegame/images/0/05/1924_Saint-Gaudens_Double_Eagle_Gold_Coin.png/revision/latest?cb=20160420000935' alt='1924 Saint Gaudens Double Eagle gold coin'/>
						Coin Cache
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
							Already A Member? <Link to='/login'>Login</Link>
						</Message>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
			)
	}
}

export default Register;