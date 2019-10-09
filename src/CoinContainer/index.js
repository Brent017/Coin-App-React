import React, { Component } from 'react';
import CreateCoin from '../CreateCoin';
import 'semantic-ui-css/semantic.min.css';
import CoinList from '../CoinList';
import CollectionGrid from '../CollectionGrid';
import EditCoin from '../EditCoin';
import './style.css';

class CoinContainer extends Component {
	constructor() {
		super();

		this.state = {
			id: '',
			coins: [],
			showCoinModal: false,
			showEditModal: false,
			silverMelt: null,
			copperMelt: null,
			goldMelt: null,
			totalNumismatic: null,
			coinToAdd: {
				year: '',
				denomination: '',
				mint_mark: '',
				number_minted: ''
			},
			editCoinId: null,
			coinToEdit: {
				id: '',
				year: '',
				denomination: '',
				mint_mark: '',
				num_value: ''
			}
		}
	}

	componentDidMount() {
		this.getCoins();
		this.getSilverValue();
		this.getCopperValue();
		this.getGoldValue();
	}

	numismaticValue = () => {
		let totalNumismatic = 0.00;
		const coin = this.state.coins
		// console.log(coin[0].num_value, '<-- coin.data');
		for(let i = 0; i < coin.length; i++) {
			if(coin[i].num_val !== null) {
				totalNumismatic += parseFloat(coin[i].num_value)
			}
		}
		this.setState({
			totalNumismatic: totalNumismatic
		})
	}

	addCoin = async (coin) => {
		
		try {
			const createCoin = await fetch(process.env.REACT_APP_BACKEND_URL + '/coins/v1/', {
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
			console.log(createCoinResponse.data, "Coin DATAAAA");
			this.setState({
				coins: createCoinResponse.data,
				showCoinModal: false
				
			})
		} catch(err) {
			console.log(err, 'addCoin error');
			return err
		}
		this.getCoins();
	}

	showModal = (coin) => {
		console.log(coin, '<-coin in showModal');
		this.setState({
			coinToAdd: coin,
			showCoinModal: !this.state.showEditModal
		})
	}

	closeModal = () => {
		this.setState({
			showCoinModal: false
		})
	}

	closeEditModal = () => {
		this.setState({
			showEditModal: false
		})
	}

	getSilverValue = async () => {
		try {
			const melt = await fetch('https://www.quandl.com/api/v3/datasets/CHRIS/CME_SI1?api_key=eJytx4A9GTBYAKVhEU3H', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				}
			})
			const meltJson = await melt.json();
			console.log(meltJson.dataset.data[0][2], "MELT JSON");

			this.setState({
				silverMelt: meltJson.dataset.data[0][2]
			})
		} catch(err) {
			console.log(err, 'getSilverValue error');
			return err;
		}
	}

	getCopperValue = async () => {
		try {
			const melt = await fetch('https://www.quandl.com/api/v3/datasets/CHRIS/CME_HG1?api_key=eJytx4A9GTBYAKVhEU3H', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				}
			})
			const meltJson = await melt.json();

			this.setState({
				copperMelt: meltJson.dataset.data[0][2]
			})
		} catch(err) {
			console.log(err, 'getCopperValue error');
			return err;
		}
	}

	getGoldValue = async () => {
		try {
			const melt = await fetch('https://www.quandl.com/api/v3/datasets/CHRIS/CME_GC1?api_key=eJytx4A9GTBYAKVhEU3H', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				}
			})
			const meltJson = await melt.json();

			this.setState({
				goldMelt: meltJson.dataset.data[0][2]
			})
		} catch(err) {
			console.log(err, 'getGoldValue error');
			return err;
		}
	}

	getCoins = async () => {
		try {
			// console.log(this.props, 'props in get');
			const responseGetCoins = await fetch(process.env.REACT_APP_BACKEND_URL + '/coins/v1/' + this.props.userInfo.id, {
				method: 'GET',
				credentials: 'include',
				headers: {
					'enctype': 'multipart/form-data'
				}
			})
			
			// console.log(responseGetCoins, 'responseGetCoins');
			const coinsResponse = await responseGetCoins.json();
			console.log(await coinsResponse, '<-coinsResponse');
			if(coinsResponse.status.code !== 200) {
				throw Error('404 from server')
			}
			this.setState({
				coins: coinsResponse.data
			});
		} catch(err) {
			console.log(err, 'err from getCoins');
			return err
		}
		this.numismaticValue();
	}

	handleFormChange = (e) => {
		this.setState({
			coinToAdd: {
				...this.state.coinToAdd,
				[e.currentTarget.name]: e.currentTarget.value
			}
		})
	}

	handleEditChange = (e) => {
		this.setState({
			coinToEdit: {
				...this.state.coinToEdit,
				[e.target.name]: e.target.value
			}
		})
	}

	updateCoin = async (coin) => {
		console.log('coin in updateCoin: ', coin);
		try {
			const editRequest = await fetch(process.env.REACT_APP_BACKEND_URL + '/coins/v1/' + coin.id, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(coin),
				headers: {
					'Content-type': 'application/json'
				}
			})
			console.log(editRequest, 'editRequest');
			if(editRequest.status !== 200) {
				throw Error('edit request not working')
			}
			const editResponse = await editRequest.json();
			console.log('editResponse: ', editResponse)
			if(editResponse.status.code !== 200) {
				throw Error('edit request not working')
			}
			const editedCoinArray = this.state.coins.map((coin) => {
				if(coin === editResponse.data.id) {
					coin = editResponse.data
				}
				return coin
			});
			this.setState({
				coins: [...this.state.coins, editResponse.data],
				showEditModal: false
			})
		} catch(err) {
			console.log(err, 'error updateCoin');
			return err
		}

	}

	editCoin = (coin) => {
		console.log(coin, 'COIN in editCoin');
		this.setState({
			coinToEdit: {...coin},
			showEditModal: true
		})
	}

	deleteCoin = async (id) => {
		try {
			const deleteCoin = await fetch(process.env.REACT_APP_BACKEND_URL + '/coins/v1/' + id, {
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'enctype': 'multipart/form-data'
				}
			})
			if(deleteCoin.status !== 200) {
				throw Error('An error occurred on delete')
			}
			const deleteCoinJson = await deleteCoin.json();
			this.setState({
				coins: this.state.coins.filter((coin) => coin.id !== id)
			})
		} catch(err) {
			console.log(err, 'error in delete');
			return err
		}
		this.getCoins();
	}

	render() {
		return (
			<div className='CoinContainer' >
				{this.state.showCoinModal ? 
					<CreateCoin 
						addCoin={this.addCoin} 
						coinToAdd={this.state.coinToAdd} 
						handleFormChange={this.handleFormChange} /> 
					: 
						null
				}
				<CollectionGrid showModal={this.showModal} />
				{	this.state.showEditModal ? 
					<EditCoin 
						updateCoin={this.updateCoin} 
						coinToEdit={this.state.coinToEdit}
						closeEditModal={this.closeEditModal} /> 
					: 
						null
				}
				{	this.state.coins ?
					<CoinList 
						coins={this.state.coins} 
						deleteCoin={this.deleteCoin} 
						editCoin={this.editCoin} 
						silverMelt={this.state.silverMelt} 
						copperMelt={this.state.copperMelt} 
						goldMelt={this.state.goldMelt}
						totalNumismatic={this.state.totalNumismatic} />
					:
						null
				}
			</div>
			)
	}
}

export default CoinContainer;