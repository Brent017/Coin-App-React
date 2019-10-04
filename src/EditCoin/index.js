import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react'

class EditCoin extends Component {
	constructor() {
		super()
		this.state = {
			id: '',
			year: '',
			denomination: '',
			mint_mark: '', 
			num_value: ''
		}
	}

	handleEditChange = (e) => {
		e.preventDefault()
		this.setState({
			id: this.props.coinToEdit.id,
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = () => {
		this.props.updateCoin(this.state)
	}

	setCoinToEdit = () => {
		this.setState({
			...this.props.coinToEdit
		})
	}

	componentDidMount() {
		this.setCoinToEdit()
	}

	render() {
	return (
		<div className="ui-container">
		<h3 style={{fontSize: "22px"}}>Edit Coin</h3>
			<form onSubmit={this.handleSubmit} class="ui form">
				<div class="five fields">
					<div class="field">
						<label>Year</label>
						<input type="text" name="year" onChange={this.handleEditChange} value={this.state.year}/>
					</div>
					<div class="field">
						<label>Denomination</label>
						<input type="text" name="denomination" onChange={this.handleEditChange} value={this.state.denomination} />
					</div>
					<div class="field">
						<label>Mint Mark</label>
						<input type="text" name="mint_mark" onChange={this.handleEditChange} value={this.state.mint_mark} />
					</div>
					<div className='field'>
						<label>Numismatic Value: $</label>
						<Form.Input type='number' min='0.01' max='1,000,000.00' step='any' name='num_value' placeholder='0.00' onChange={this.updateCoin} value={this.state.num_value} />
					</div>
				</div>
				<div className="centerme">
					<Button class="teal " type="submit">
						Edit Coin
					</Button>
					<Button class="teal" type="submit">
						Close
					</Button>
				</div>
			</form>
		</div>
		)
}
}

export default EditCoin;

