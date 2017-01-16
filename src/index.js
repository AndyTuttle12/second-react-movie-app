
// React stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// custom stuff
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home';
// styles
import './index.css';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
		</Route>
	</Router>,
	document.getElementById('root')
);
