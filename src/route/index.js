import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';

import HomeTitle from '../a_container/home/';
import CarCon from '../a_container/car/';
import History from '../a_container/history/';

import RootContainer from '../a_container/root/';

const requireAuth = (nextStaten, replace) => {
	if (!localStorage.onEnter) {
		console.log('1235')
		replace({
			pathname: '/'
		});
	}
}

const loginIn = false;

const RouterCon = () => (
	<Router>
		<div>
			<div>
				<RootContainer></RootContainer>
			</div>

			<Route exact path="/" component={HomeTitle}/>
			<Route path="/home" component={HomeTitle}/>
			<Route 
				path="/car"  
				render={()=> (
					loginIn ? <Route component={CarCon}/>
					        : <Redirect to="/" />
				)}
			/>
			<Route path="/history" component={History} onEnter={requireAuth}/>
		</div>
	</Router>
);

export default RouterCon;