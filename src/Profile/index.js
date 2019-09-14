import React, { Component } from 'react';
import { Grid, Card, Header } from 'semantic-ui-react';
import CreateCoin from '../CreateCoin';
import CoinList from '../CoinList';
import TimeOfDay from './tod';
import FactFunction from './facts';
import './style.css';

class Profile extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			image: '',
			username: ''
		}
	}


	render() {
		// console.log(this.state, this.props.userInfo, '<-in profile<props');
		return (
			<Grid stackable columns={3} padded className='Profile'>
				<Grid.Row>
					<Grid.Column width={4}>
						{
							this.props.userInfo.loading ? 'Loading...' :
							<Card
								image={process.env.REACT_APP_BACKEND_URL + '/static/profile_pics/' + this.props.userInfo.image}
								header={this.props.username}
								meta={this.props.email}
								description={this.props.userInfo.username}
								style={{ fontSize: "30px"}}
								/>
						}
					</Grid.Column>
					<Grid.Column width={8}>
						<Header className='Profile' as='h2' textAlign='center'>
							Good <TimeOfDay/> {this.props.userInfo.username} <br/>
							<span></span> <br/>
							Did you know: <br/>
							<FactFunction />
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