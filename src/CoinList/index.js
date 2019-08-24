import React from 'react';
import { Form, Button, Label, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';


const Coins = (props) => {
	console.log(props, 'props in CoinList');

const coinList = props.coins.map((coin) => {
	return (
		<div>
		<h3>Coins in your collection</h3>
		<div class='ui buttons mini'>
			</div>
		<Grid.Row key={coin._id}>
			<Grid.Column>{coin.year}: </Grid.Column>
			<Grid.Column>{coin.denomination}: </Grid.Column>
			<Grid.Column>{coin.mint_mark}: </Grid.Column>
			<Grid.Column>{coin.number_minted}: </Grid.Column>
			<Grid.Column>Composition </Grid.Column>
			<Grid.Column>Melt </Grid.Column>
			<Grid.Column>Value </Grid.Column>
			
		</Grid.Row>
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