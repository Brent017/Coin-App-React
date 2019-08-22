import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

const Coins = (props) => {
	console.log(props, 'props in CoinList');

const coinList = props.coins.map((coin) => {
	return (
		<tr key={coin._id}>
			<td>{coin.year}</td>
			<td>{coin.denomination}</td>
			<td>{coin.mint_mark}</td>
			<td>{coin.number_minted}</td>
			<td>{coin.composition_primary}</td>
			<td>{coin.percent_primary}</td>
			<td>{coin.composition_secondary}</td>
			<td>{coin.percent_secondary}</td>
			<td>{coin.melt_value}</td>
			<td>{coin.num_value}</td>
			<div class='ui buttons mini'>
				<button class='ui button' onClick={props.showCoin.bind(null, coin._id)}>Detail</button>
				<button class='ui button' onClick={props.showModal.bind(null, coin)}>Edit</button>
				<button class='ui button' onClick={props.deleteCoin.bind(null, coin._id)}>Delete</button>
			</div>
		</tr>
		)
})
return (
	<div>
		<table class='ui unstackable inverted teal table'>
			<thread>
				<tr>
					<th>Year</th>
					<th>Denomination</th>
					<th>Mint</th>
					<th>Total Minted</th>
					<th>Primary Metal</th>
					<th>Percent</th>
					<th>Secondary Metal</th>
					<th>Percent</th>
					<th>Melt</th>
					<th>Numismatic Value</th>
				</tr>
			</thread>
			<tbody>
				{coinList}
			</tbody>
		</table>
	</div>
	)
}

export default Coins;