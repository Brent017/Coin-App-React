import React, { Component } from 'react';
import SearchBar from './SearchBar';

class EbaySearch extends Component {
	constructor() {
		super();
		this.state ={ 
			items: [],
			isLoaded: true
		}
	}

	componentDidMount() {
		fetch('https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=BrentOtt-CoinCach-SBX-3447dc556-92843442&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=nickel&categoryId=253&itemFilter(0).name=Condition&itemFilter(1).name=FreeShippingOnly&itemFilter(1).value=true&itemFilter(2).name=SoldItemsOnly&itemFilter(2).value=true&sortOrder=PricePlusShippingLowest&paginationInput.entriesPerPage=2')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
	}

	render() {
		let { isLoaded, items } = this.state;
		if(!isLoaded){
			return <div>Loading...</div>
		} else {}
		return (
			<div>
				
				<SearchBar />
				<ul>
					{items.map(item => (
						<li key={item.id} >
							{item.name}
						</li>
					))};
				</ul>
			</div>
		)
	}
}

export default EbaySearch;