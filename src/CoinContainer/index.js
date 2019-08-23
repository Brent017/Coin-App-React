import React, { Component } from 'react';
import CreateCoin from '../CreateCoin';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import Profile from '../Profile';
// import CreateCoin from '../CreateCoin';
import CoinList from '../CoinList';

class CoinContainer extends Component {
	constructor() {
		super();

		this.state = {
			coins: [],
			showCoinModal: false
		}
	}

	componentDidMount() {
		this.getCoins();
	}

	addCoin = async (coin, e) => {
		e.preventDefault();
		try {
			const createCoin = await fetch('http://localhost:8000/api/v1/coin', {
				method: 'POST',
				body: JSON.stringify(coin),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if(createCoin.status !==200) {
				throw Error('404 from server')
			}
			const createCoinResponse = await createCoin.json();
			// console.log(createCoinResponse.data, 'createCoinResponse data')
			this.setState({
				coins:[...this.state.coins, createCoinResponse.data]
			})
		} catch(err) {
			console.log(err, 'addCoin');
			return err
		}
	}

	getCoins = async () => {
		try {
			const responseGetCoins = await fetch('http://localhost:8000/coins/v1')
			console.log(responseGetCoins, 'responseGetCoins');
			if(responseGetCoins.status !== 200) {
				throw Error('404 from server')
			}
			const coinsResponse = await responseGetCoins.json();
			console.log(coinsResponse, '<-coinsResponse');
			this.setState({
				coins: [...coinsResponse.data]
			});
		} catch(err) {
			console.log(err, 'err from getCoins');
			return err
		}
	}

	handleFormChange = (e) => {
		this.setState({
			coinToAdd: {
				...this.state.coinToAdd,
				[e.currentTarget.name]: e.currentTarget.value
			}
		})
	}

	showCoin = (coin) => {
		console.log(coin, 'coin in showCoin');
		this.setState({
			coinToShow: coin,
			showCoinModal: !this.state.showCoinModal
		})
	}

	deleteCoin = async (id) => {
		try {
			const deleteCoin = await fetch('http://localhost:8000/coins/v1/' + id, {
				method: 'DELETE'
			})
			if(deleteCoin.status !== 200) {
				throw Error('An error occurred on delete')
			}
			const deleteCoinJson = await deleteCoin.json();
			this.setState({
				coins: this.state.coins.filter((coin) => coin._id !== id)
			})
		} catch(err) {
			console.log(err);
			return err
		}
	}

	render() {
		return (
			<div>
				<CreateCoin addCoin={this.addCoin} />
				<CoinList coins={this.state.coins} deleteCoin={this.deleteCoin} showCoin={this.showCoin} />
			</div>
			)
	}
}

export default CoinContainer;