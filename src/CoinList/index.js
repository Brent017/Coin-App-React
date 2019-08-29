import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Coins = (props) => {
	
	const composition = (coin) => {
		if(coin.denomination === .25 || .10 || .50 && coin.year < 1965) {
			return '90% Silver, 10% Copper'
		} else if(coin.denomination === .01 && coin.year < 1982) {
			return '95% Copper'
		} else if(coin.denomination === .50 && coin.year > 1965 && coin.year < 1971) {
			return '40% Silver, 60% Copper'
		} else if(coin.denomination === 1 && coin.year < 1936) {
			return '90% Silver, 10% Copper'
		} else if(coin.denomination === 1 && coin.year > 1970 && coin.year < 1977) {
			return '40% Silver, 60% Copper'
		} else if(coin.denomination === .05 && coin.year > 1941 && coin.year < 1946) {
			return '35% Silver, 56% Copper'
		}
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