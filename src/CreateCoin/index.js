import React, { Component } from 'react';
import { Form, Button, Label, Input, Dropdown } from 'semantic-ui-react';
import DropdownBox from '../DropdownBox';

class CreateCoin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: '',
			denomination: '',
			mint_mark: ''
		}
	}

	updateCoin = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

  handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('year', this.state.year)
    data.append('denomination', this.state.denomination)
    data.append('mint_mark', this.state.mint_mark)

    this.props.addCoin(data)
  }

	handleClear = () => {
		this.setState({
			year: '',
			denomination: '',
			mint_mark: ''
		})
	}

	render() {
		return (
			<div>
				<h3>Add New Coin</h3>
				<Form form onSubmit={this.handleSubmit} onReset={this.handleClear} class='ui form'>
				<div class='three fields'>
					<div class='field'>
						<Label>Year Minted: </Label>
						<Form.Input type='text' name='year' placeholder='ie: 1900' onChange={this.updateCoin} value={this.state.year} />
					</div>
					<div class='field'>
						<Label>Denomination: $</Label>
						<Form.Input type="number" min="0.005" max="20.00" step="any" name='denomination' placeholder='.005 - 20.00' onChange={this.updateCoin} value={this.state.denomination} />
            <Label>Half cent -> $20</Label>
					</div>
          <div>
            <Label>Mint Mark</Label><br/>
            <DropdownBox onChange={this.updateCoin} value={this.state.mint_mark} />
          </div>
				</div>
				<div>
					<Button class='teal ' type='submit'>
						Add Coin to Collection 
					</Button>
					<Button class='teal ' type='reset'>
						Clear 
					</Button>
				</div>
				</Form>
			</div>
			)
	}
}

export default CreateCoin;