import React, { Component } from 'react';
import { Link } from 'react-router';

class Poster extends Component {
	render() {
		const imagePath = 'http://image.tmdb.org/t/p/w300' + this.props.poster.poster_path;
		const posterLink = '/movie/' + this.props.poster.id;
		// this.props.poster.id contains object of data for each movie
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<Link to={posterLink}><img src={imagePath} role="presentation"/></Link>
			</div>
		);
	}
}

export default Poster;