
// react stuff
import React, { Component } from 'react';
// Custom

import BootstrapNavBar from './bootstrap-navbar';


// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		}
		this.handleSearch = this.handleSearch.bind(this)
	}

	handleSearch(searchTextFromChild){
		this.setState({
			searchText: searchTextFromChild
		});
		this.props.router.push('/search/' + encodeURI(searchTextFromChild));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<BootstrapNavBar functionFromParent={this.handleSearch}/>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
