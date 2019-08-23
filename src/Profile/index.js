import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Card, Header } from 'semantic-ui-react';
import CreateCoin from '../CreateCoin';
import CoinList from '../CoinList';
import ReactDom from 'react-dom'


class Profile extends Component {
	constructor() {
		super();

		this.state = {
			id: 1,
			email: '',
			image: '',
			username: '',
			timeOfDay: ''
		}
	}

	greeting = () => {
		const date = new Date();
		console.log(date);
		const hours = date.getHours();

		if(hours < 12) {
			this.setState({
				timeOfDay: 'morning'
			})
		} else if(hours >= 12 && hours < 17) {
			this.setState({
				timeOfDay: 'afternoon'
			})
		} else {
			this.setState({
				timeOfDay: 'evening'
			})
		}
	}

	render() {
		console.log(this.state.timeOfDay, '<-time of day')
		// console.log(this.state, this.props.userInfo, '<-in profile<props');
		return (
			<Grid columns={2} padded style={{ height: '100vh'}}>
				<Grid.Row>
					<Grid.Column width={4}>
						{
							this.props.userInfo.loading ? 'Loading...' :
							<Card
								image={'http://localhost:8000/profile_pics/' + this.props.userInfo.image}
								header={this.props.username}
								meta={this.props.email}
								description='If you want a caption in Profile.index.js'
								style={{ 'marginLeft': '5vw'}}
								/>
						}
					</Grid.Column>
					<Grid.Column width={8}>
						<Header as='h2' textAlign='center'>
							Good {this.state.timeOfDay} {this.props.userInfo.username}
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			)
	}
}

export default Profile;