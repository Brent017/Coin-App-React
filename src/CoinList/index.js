import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Coins = (props) => {
	console.log(props, '<--props in coinList');
	console.log(props.coins, '<--props.coins in coinList');
	console.log(props.coins.year, "coin.year in coinList");

	const coinList = props.coins.map((coin) => {

		return (
			<div class='ui buttons mini'>
				<Grid stackable columns={7} divided style={{fontSize: "22px", textAlign: "center", marginTop: "5%"}} >
				<Grid.Row key={coin._id} >
					<Grid.Column> 
						<Segment>Yr:
							{coin.year}
						</Segment>
					</Grid.Column>
					<Grid.Column> 
						<Segment>Dn:
							{coin.denomination}
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>MM:
							{coin.mint_mark}
						</Segment>
					</Grid.Column>
					<Grid.Column> 
						<Segment>Mt:
							{coin.number_minted}
						</Segment>
					</Grid.Column>
					<Grid.Column>CP:
						<Segment>
							Comp
						</Segment>
					</Grid.Column>
					<Grid.Column>Ml:
						<Segment>
							Melt
						</Segment>
					</Grid.Column>
					<Grid.Column>Vl:	
						<Segment>
							Value
						</Segment>
					</Grid.Column>
				</Grid.Row>
				</Grid>
			</div>
			)
	})
	return (
		<div>
			{coinList}	
		</div>
		)
}

export default Coins;