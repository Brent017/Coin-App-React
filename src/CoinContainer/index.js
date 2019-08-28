import React, { Component } from 'react';
import CreateCoin from '../CreateCoin';
import 'semantic-ui-css/semantic.min.css';
import CoinList from '../CoinList';
import CollectionGrid from '../CollectionGrid';

class CoinContainer extends Component {
	constructor() {
		super();

		this.state = {
			id: '',
			showCoinModal: false,
			coinToAdd: {
				year: '',
				denomination: '',
				mint_mark: '',
				number_minted: ''
			}
		}
	}

	componentDidMount() {
		this.getCoins();
	}

	addCoin = async (coin) => {
		
		try {
			const createCoin = await fetch('http://localhost:8000/coins/v1/', {
				method: 'POST',
				body: coin,
				credentials: 'include',
				headers: {
					'enctype': 'multipart/form-data'
				}
			})
			if(createCoin.status !==200) {
				throw Error('404 from server')
				console.log(createCoin.status, 'createCoin.status');
			}
			const createCoinResponse = await createCoin.json();
			// console.log(createCoinResponse, '<--createCoinResponse');
			// console.log(createCoinResponse.data, '<--createCoinResponse data')
			// const coinToAdd = this.state.coins.map((coin) => {
			// 	if(coin._id === createCoinResponse.data._id) {
			// 		coin = createCoinResponse.data
			// 	}
			// 	return coin
			// })

			this.setState({
				coins: [...this.state.coins, createCoinResponse.data],
				showCoinModal: false
				
			})
			// console.log(this.state.coins, '<---coins array');
		} catch(err) {
			console.log(err, 'addCoin error');
			return err
		}
		// console.log(this.state.coins, '<---coins array');
	}

	showModal = (coin) => {
		console.log(coin, '<-coin in showModal');
		this.setState({
			coinToAdd: coin,
			showCoinModal: !this.state.showEditModal
		})
	}

	getCoins = async () => {
		try {
			console.log(this.props, 'props in get');
			const responseGetCoins = await fetch('http://localhost:8000/coins/v1/' + this.props.userInfo.id)
			
			console.log(responseGetCoins, 'responseGetCoins');
			if(responseGetCoins.status !== 200) {
				throw Error('404 from server')
			}
			const coinsResponse = await responseGetCoins.json();
			console.log(await coinsResponse, '<-coinsResponse');
			this.setState({
				coins: coinsResponse.data
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
			<div style={{backgroundColor: "gold"}} >
				{this.state.showCoinModal ? <CreateCoin addCoin={this.addCoin} coinToAdd={this.state.coinToAdd} handleFormChange={this.handleFormChange} /> : null}
				<CollectionGrid showModal={this.showModal} />
				{	this.state.coins ?
						<CoinList coins={this.state.coins} getCoins={this.getCoins} deleteCoin={this.deleteCoin} showCoin={this.showCoin} />
					:
						null
				}
			</div>
			)
	}
}

export default CoinContainer;