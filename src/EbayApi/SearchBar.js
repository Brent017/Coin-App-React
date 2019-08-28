import React from 'react';
import { Search, Grid } from 'semantic-ui-react';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			term: ''
		}
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return (
			<Grid.Row>
				<Grid stackable columns={3}>
					<Grid.Column width={5}>
					</Grid.Column>
					<Grid.Column width={6} style={{textAlign: 'center'}}>
						Search ebay <br/>
						<Search className="search" class="ui input">
							<input onChange={event => this.onInputChange(event.target.value)} type="text" placehodler="Search ebay" />
						</Search>
					</Grid.Column>
					<Grid.Column width={5}>
					</Grid.Column>
				</Grid>
			</Grid.Row>
		)
	}
}

export default SearchBar;