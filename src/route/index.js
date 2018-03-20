import React from 'react';
import {
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';

import HomeTitle from '../a_container/home/';
import CarCon from '../a_container/car/';
import History from '../a_container/history/';

import RootContainer from '../a_container/root/';

const RouterCon = () => (
	<Router>
		<div>
			<Route path="/" component={RootContainer}/>
			<Route exact path="/home" component={HomeTitle}/>
			<Route path="/car" component={CarCon}/>
			<Route path="/history" component={History}/>
		</div>
	</Router>
);

export default RouterCon;