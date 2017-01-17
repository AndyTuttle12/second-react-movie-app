import React, { Component } from 'react';
// import { Link } from 'react-router';
import Constants from './constants';
import Config from './config';
import $ from 'jquery';
import Poster from './Poster';


class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {

		const url = Constants.baseUrl + 'search/movie?query=' + this.props.params.movieToSearchFor + Config.api_key;
		$.getJSON(url, (searchData) =>{
			this.setState({
				moviePosters: searchData.results
			})
		});
	}

	render() {
		const postersArray = [];
		this.state.moviePosters.map((poster, index) =>{
			postersArray.push(<Poster poster={poster} key={index} />)		
			return postersArray;
		});

		return(
			<div className="col-sm-12">
				<h1>{this.props.params.movieToSearchFor}</h1>
				{postersArray}
			</div>
		);
	}
}

export default SearchResults;