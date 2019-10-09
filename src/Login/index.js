import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Image from '../coins_gold.jpg';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			notValid: false
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

    console.log(this.state.username);

    const data = new FormData()
    data.append('username', this.state.username)
    data.append('password', this.state.password)

    const login = this.props.logIn(this.state);

  //   for(let pair of data.entries()) {
		// 	console.log(pair[0], '<-key value pair');
		// }

	// console.log(data.status, 'message from server');
    login.then((data) => {
      if(data.status.message === 'Success!'){
        this.props.history.push('/profile')
      } else {
      	this.setState({
      		notValid: true
      	})
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }

	render() {
		return (		
			<Grid className='login' textAlign='center' verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450, height: 1000}}>
					<Header className='title' style={{fontSize: '80px', color: '#c0c0c0', fontStyle: 'Consolas', textShadow: '2px 2px #111'}} as='h2' textAlign='center'>
						<br/> Coin Ca<span>&#162;</span>he
					</Header>
					<Form onSubmit={this.handleSubmit} >
						<Segment stacked >
						Username:
						<Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange} />
						Password:
						<Form.Input fluid icon='asterisk' iconPosition='left' placeholder='password' type='text' name='password' onChange={this.handleChange} />
						<Button fluid size='large' type='submit'>Login</Button>
						{this.state.notValid ? <div style={{ fontSize: '20px', color: 'red' }}>Invalid username or password, please try again.</div> : null}
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