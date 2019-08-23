import React, { Component } from 'react';
import { Form, Button, Label, Input } from 'semantic-ui-react';

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
				<Form form onSubmit={this.props.addCoin.bind(null, this.state)} onReset={this.handleClear} class='ui form'>
				<div class='two fields'>
					<div class='field'>
						<Label>Year Minted</Label>
						<Form.Input type='text' name='year' placeholder='1900' onChange={this.updateCoin} value={this.state.year} />
					</div>
					<div class='field'>
						<Label>Denomination: $</Label>
						<Form.Input type='number' name='denomination' placeholder='0.00' onChange={this.updateCoin} value={this.state.year} />
					</div>
					<div class="ui compact menu">
  						<div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
    						<div class="text" role="alert" aria-live="polite" aria-atomic="true">Dropdown</div>
    						<i aria-hidden="true" class="dropdown icon"></i>
    						<div class="menu transition">
    							<div
        							style="pointer-events:all"
        							role="option"
        							aria-checked="false"
        							aria-selected="false"
        							class="item"
      							>
        							<span class="text">None - Philadelphia</span>
      							</div>
      							<div
        							style="pointer-events:all"
        							role="option"
        							aria-checked="false"
        							aria-selected="true"
        							class="selected item"
      							>
        							<span class="text">P - Philadelphia</span>
      							</div>
      							<div
        							style="pointer-events:all"
        							role="option"
        							aria-checked="false"
        							aria-selected="false"
        							class="item"
      							>
        							<span class="text">D - Denver</span>
      							</div>
      							<div
        							style="pointer-events:all"
        							role="option"
        							aria-checked="false"
        							aria-selected="false"
        							class="item"
      							>
        							<span class="text">S - SanFrancisco</span>
      							</div>
      							<div
        							style="pointer-events:all"
        							role="option"
        							aria-checked="false"
        							aria-selected="false"
        							class="item"
      							>
        							<span class="text">CC - Carson City</span>
      							</div>
    						</div>
  						</div>
					</div>
				</div>
				<div className='centerme'>
					<Button class='teal ' type='submit'>
						Add New Coin 
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