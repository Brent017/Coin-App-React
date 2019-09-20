import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Coins = (props) => {

	const meltValue = (coin) => {
		const coindb = coin.coindb
		let silver = 17.80;
		let copper = 2.6151;
		let melt = 0;
		const ozToGram = .0321507466
		const lbToGram = .00220462262
		if(coindb.denomination === .25 && coindb.year < 1965 && coindb.year > 1891) {
			melt = (silver * ozToGram * 6.25 * .9) + (copper * lbToGram * 6.25 * .1)
		} else if(coindb.denomination === .10 && coindb.year < 1965){
			melt = (silver * ozToGram * 2.5 * .9) + (copper * lbToGram * 2.5 * .1)
		} else if(coindb.denomination === .50 && coindb.year < 1965 && coindb.year > 1891) {
			melt = (silver * ozToGram * 12.5 * .9) + (copper * lbToGram * 12.5 * .1)
		} else if(coindb.denomination === .50 && coindb.year > 1964 && coindb.year < 1971) {
			melt = (silver * ozToGram * 11.5 * .4) + (copper * lbToGram * 11.5 * .6)
		} else if(coindb.denomination === .01 && coindb.year < 1982 && coindb.year > 1863 && coindb.year !== 1943) {
			melt = (copper * lbToGram * 3.11 * .95)
		} else if(coindb.denomination === 1.00 && coindb.year < 1936 && coindb.year > 1877) {
			melt = (silver * ozToGram * 26.73 * .9) + (copper * lbToGram * 26.73 * .1)
		} else if(coindb.denomination === 1.00 && coindb.year > 1970 && coindb.year < 1977) {
			melt = (silver * ozToGram * 24.59 * .4) + (copper * lbToGram * 24.59 * .6)
		} else if(coindb.denomination === .05 && coindb.year > 1941 && coindb.year < 1946) {
			melt = (silver * ozToGram * 5 * .35) + (copper * lbToGram * 5 * .56)
		} else if(coindb.denomination === .02) {
			melt = (copper * lbToGram * 6.22 * .95)
		}
		let value = Math.round(100*melt)/100
		return '$'+value
	}

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
		} else if(coindb.denomination === .02) {
			string = '95% copper'
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
    								<div key={coin.id} className="header">Date: {coin.year} | $ {coin.denomination} | {coin.mint_mark} | Comp: {composition(coin)} | Melt: {meltValue(coin)} | 
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