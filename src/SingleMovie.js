import React, { Component } from 'react';

import $ from 'jquery';

class SingleMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			budget: '',
			revenue: ''
		}
	}

	componentDidMount() {
		const currentMovieId = this.props.params.id;
		const url = 'https://api.themoviedb.org/3/movie/' + currentMovieId + '?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieApiResponse) =>{
			const revenue = "$" + movieApiResponse.revenue;
			const budget = "$" + movieApiResponse.budget;
			this.setState({
				currentMovieData: movieApiResponse,
				revenue: revenue,
				budget: budget
			})
		});
	}

	render() {
		const posterPath = 'http://image.tmdb.org/t/p/w600/' + this.state.currentMovieData.poster_path;
		return(
			<div className="col-sm-8">
				<a href={this.state.currentMovieData.homepage} target="_blank">
					<img src={posterPath} alt={this.currentMovieId}/>
				</a>
			</div>
		);
	}
}

export default SingleMovie;