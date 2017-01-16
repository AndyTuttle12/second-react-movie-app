
// react stuff
import React, { Component } from 'react';
// Custom
import $ from 'jquery';
import Poster from './Poster';
import BootstrapNavBar from './bootstrap-navbar';


// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {
		const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieData) =>{
			this.setState({
				moviePosters: movieData.results
			})
		})
	}

	render() {
		const postersArray = [];
		this.state.moviePosters.map((poster, index) =>{
			postersArray.push(<Poster poster={poster} key={index} />)
			return postersArray;
		});
		// load up PostersArray with poster components
		return (
			<div className="container">
				<div className="row">
					<BootstrapNavBar />
					{this.props.children}
					{postersArray}
				</div>
			</div>
		);
	}
}

export default App;
