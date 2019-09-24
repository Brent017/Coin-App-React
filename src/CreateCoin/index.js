import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
// import DropdownBox from '../DropdownBox';

const options = [
  { key: 1, text: 'None', value: '' },
  { key: 2, text: 'CC', value: 'CC' },
  { key: 3, text: 'D', value: 'D' },
  { key: 4, text: 'P', value: 'P' },
  { key: 5, text: 'S', value: 'S' },
  { key: 6, text: 'W', value: 'W' },
  { key: 7, text: 'O', value: 'O' }
]

class CreateCoin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: '',
			denomination: '',
			mint_mark: '',
			num_value: null
		}
	}

	updateCoin = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

  handleSelectChange=(e,{value})=>this.setState({mint_mark:value})

  handleSubmit = (e, value) => {
    e.preventDefault();

    const data = new FormData();
    data.append('year', this.state.year)
    data.append('denomination', this.state.denomination)
    data.append('mint_mark', this.state.mint_mark)
    data.append('num_value', this.state.num_value)
    console.log(this.state, 'this.state');
    this.props.addCoin(data)
  }

	handleClear = () => {
		this.setState({
			year: '',
			denomination: '',
			mint_mark: '',
			num_value: null
		})
	}

	render() {
		return (
			<div>
				<h3 style={{fontSize: "22px"}}>Add New Coin</h3>
				<Form form onSubmit={this.handleSubmit} onReset={this.handleClear} class='ui form'>
				<div className='three fields'>
					<div className='field'>
						<Label>Year Minted: </Label>
						<Form.Input type='text' name='year' placeholder='ie: 1900' onChange={this.updateCoin} value={this.state.year} />
					</div>
					<div className='field'>
						<Label>Denomination: $</Label>
						<Form.Input type="number" min="0.005" max="20.00" step="any" name='denomination' placeholder='.005 - 20.00' onChange={this.updateCoin} value={this.state.denomination} />
            			<Label>Half cent -> $20</Label>
					</div>
          			<div>
            			<Form.Select fluid label='Mint Mark' 
                          	options={options}
                          	placeholder='None' 
                          	value={this.state.mint_mark} 
                          	onChange={this.handleSelectChange} /></div>
					</div>
					<div className='field'>
						<Label>Numismatic Value: $</Label>
						<Form.Input type='number' name='num_value' placeholder='0.00' onChange={this.updateCoin} value={this.state.num_value} />
					</div>
					<div>
						<Button type='submit'>
							Add Coin to Collection 
						</Button>
						<Button  type='reset'>
							Clear 
						</Button>
					</div>
				</Form>
			</div>
			)
	}
}

export default CreateCoin;