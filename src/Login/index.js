import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		// console.log(e.currentTarget.value);
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	handleSubmit = async (e) => {
    e.preventDefault();

    console.log(this.state.email);

    const data = new FormData()
    data.append('username', this.state.username)
    data.append('password', this.state.password)

    // console.log(data, "<-data after appending key-value");
    const login = this.props.logIn(this.state);

  //   for(let pair of data.entries()) {
		// 	console.log(pair[0], '<-key value pair');
		// }

	// console.log(data.status, 'message from server');
    login.then((data) => {
      if(data.status.message === 'Success!'){
        this.props.history.push('/profile')
      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }

	render() {
		return (
			<Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
				<Grid.Column style={{ maxWidth: 450}}>
					<Header as='h2' textAlign='center'>
						<img src='https://vignette.wikia.nocookie.net/pawnstarsthegame/images/0/05/1924_Saint-Gaudens_Double_Eagle_Gold_Coin.png/revision/latest?cb=20160420000935' alt='1924 Saint Gaudens Double Eagle gold coin'/>
						Coin Cache
					</Header>
					<Form onSubmit={this.handleSubmit} >
						<Segment stacked >
						Username:
						<Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange} />
						Password:
						<Form.Input fluid icon='asterisk' iconPosition='left' placeholder='password' type='text' name='password' onChange={this.handleChange} />
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