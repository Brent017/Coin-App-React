import React, { Component } from 'react';
import { Grid, Card, Header } from 'semantic-ui-react';
import CreateCoin from '../CreateCoin';
import CoinList from '../CoinList';
import ReactDom from 'react-dom';
import TimeOfDay from './tod';

class Profile extends Component {
	constructor() {
		super();

		this.state = {
			id: 1,
			email: '',
			image: '',
			username: ''
		}
	}


	render() {
		console.log(this.state.timeOfDay, '<-time of day')
		// console.log(this.state, this.props.userInfo, '<-in profile<props');
		return (
			<Grid columns={3} padded style={{ height: '100vh'}}>
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
					<Grid.Column width={4}>
						<Header as='h2' textAlign='center'>
							Good <TimeOfDay/> {this.props.userInfo.username}
						</Header>
					</Grid.Column>
					<Grid.Column width={4}>
						<iframe id="goldpriceiframe" 
								src="//widgets.goldprice.com/widget/index.html" 
								seamless="seamless" scrolling="no" frameborder="0" 
								marginwidth="0" 
								marginheight="0" 
								style={{width: "100%", height: "350px", overflowX: "hidden"}} 
								>
						</iframe>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			)
	}
}

export default Profile;