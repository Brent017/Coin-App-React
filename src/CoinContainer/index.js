import React, { Component } from 'react';
import CreateCoin from '../CreateCoin';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import Profile from '../Profile';

class CoinContainer extends Component {
	constructor() {
		super();

		this.state = {
			coins: [],
			showAddModal: false,

		}
	}

	componentDidMount() {
		this.getCoins();
	}

	addCoin = async (coin, e) => {
		e.preventDefault();
		try {
			const createCoin await fetch('http://localhost:8000/api/v1/coin', {
				method: 'POST',
				body: JSON.stringify(employee),
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
				coins:[..this.state.coins, createCoinResponse.data]
			})
		} catch(err) {
			console.log(err, 'addCoin');
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

	showModal = (coin) => {
		this.setState({
			coinToAdd: coin,
			showAddModal: !this.state.showAddModal
		})
	}

	render() {
		return (
			<div>
				<Profile />
				{this.state.showAddModal ? <CreateCoin closeAndAdd={this.closeAndAdd} handleFormChange={this.handleFormChange}/> : null}
			</div>
			)
	}
}