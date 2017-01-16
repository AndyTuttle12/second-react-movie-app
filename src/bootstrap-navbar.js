import React, { Component } from 'react';
import { Link } from 'react-router';

class BootstrapNavBar extends Component {
	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">WebSiteName</Link>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><Link to="/">Home</Link></li>
						<li><Link to="/nowPlaying">Now Playing</Link></li>
						<li><Link to="/topRated">Top Rated</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}



export default BootstrapNavBar;