import React, { Component } from 'react';
import { Link } from 'react-router';

class BootstrapNavBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const inputBox = event.target[0].value;
    this.props.functionFromParent(inputBox);
  }

	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">OpenVideoDB</Link>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><Link to="/">Home</Link></li>
						<li><Link to="/nowPlaying">Now Playing</Link></li>
						<li><Link to="/topRated">Top Rated</Link></li>
            <li className="col-lg-6 search-item">
              <form className="input-group" onSubmit={this.handleSearchSubmit}>
                <input className="form-control" type="text" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-success">
                    Search for Movie
                  </button>
                </span>
              </form>
            </li>
					</ul>
				</div>
			</nav>
		)
	}
}



export default BootstrapNavBar;