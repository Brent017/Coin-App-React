import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Coins = (props) => {
	const composition = (coin) => {
		console.log(coin, "Coinnnnn");
		const coindb = coin.coindb

		console.log(coindb.denomination, '<--Coin denomination in composition function');
		let string = '';
		if(coindb.denomination === .25 || coindb.denomination === .10 || coindb.denomination === .50 && coindb.year < 1965) {
			string = '90% Silver, 10% Copper'
		} else if(coindb.denomination === .01 && coindb.year < 1982) {
			string = '95% Copper'
		} else if(coindb.denomination === .50 && coindb.year > 1965 && coindb.year < 1971) {
			string = '40% Silver, 60% Copper'
		} else if(coindb.denomination === 1 && coindb.year < 1936) {
			string = '90% Silver, 10% Copper'
		} else if(coindb.denomination === 1 && coindb.year > 1970 && coindb.year < 1977) {
			string = '40% Silver, 60% Copper'
		} else if(coindb.denomination === .05 && coindb.year > 1941 && coindb.year < 1946) {
			string = '35% Silver, 56% Copper'
		} else {
			string = 'Not listed';
		}
		return string;
	}

	const coinList = props.coins.map((coin) => {
		return (
			<Grid stackable columns={2}>
				<Grid.Row>
					<Grid.Column width={12}>
						<div className="ui cards">
  							<div className="ui red fluid card">
    							<div className="content">
    								<div key={coin.id} className="header">Date: {coin.year} | $ {coin.denomination} | {coin.mint_mark} | Comp: {composition(coin)}  | 
    									<Button className="ui button" onClick={props.deleteCoin.bind(null, coin.id)} basic color='red'>
            								Remove
          								</Button>
          								<Button className="ui button" onClick={props.editCoin.bind(null, coin)} basic color='green'>
            								Edit
          								</Button>
          							</div>
          						</div>
  							</div>
  						</div>
  					</Grid.Column>
  					<Grid.Column width={4}>
						
					</Grid.Column>
				</Grid.Row>
  			</Grid>
		)
	});

	return (
		<div>
			{coinList}	
		</div>
	)
}

export default Coins;