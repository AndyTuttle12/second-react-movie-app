// Dependencies
import React, { Component } from 'react';

// custom
import $ from 'jquery';
import Poster from './Poster';
import Constants from './constants';
import Config from './config';
import DiscoverButton from './DiscoverButton';
// style
import './App.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {
		const url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key;
		$.getJSON(url, (movieData) =>{
			this.setState({
				moviePosters: movieData.results
			})
		})
	}
	// Update the state from a child category button
	handleCategoryChange(categoryApiUrl) {
		const url = Constants.baseUrl + categoryApiUrl + Config.api_key;
		$.getJSON(url, (categoryData) =>{
			this.setState({
				moviePosters: categoryData.results
			})
		});
	}

	render() {
		const postersArray = [];
		this.state.moviePosters.map((poster, index) =>{
			postersArray.push(<Poster poster={poster} key={index} />)
			return postersArray;
		});

		// build discover buttons here
		const discoverButtons = [];
		Constants.discoverLinks.map((category, index) =>{
			discoverButtons.push(
				<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionFromParent={this.handleCategoryChange} key={index} />
			)
			return discoverButtons;
		});

		return(
			<div>
				<h1>Home</h1>
				<div className="col-sm-12 text-center">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;
