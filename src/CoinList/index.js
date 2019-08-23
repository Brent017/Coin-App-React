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
		<Grid.Row key={coin._id}>
			<Grid.Column>{coin.year}: </Grid.Column>
			<Grid.Column>{coin.denomination}: </Grid.Column>
			<Grid.Column>{coin.mint_mark}: </Grid.Column>
			<Grid.Column>{coin.number_minted}: </Grid.Column>
			<div class='ui buttons mini'>
				<button class='ui button' onClick={props.showCoin.bind(null, coin._id)}>Detail</button>
				<button class='ui button' onClick={props.showModal.bind(null, coin)}>Edit</button>
				<button class='ui button' onClick={props.deleteCoin.bind(null, coin._id)}>Delete</button>
			</div>
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