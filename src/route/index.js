import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';

import HomeTitle from '../a_container/home/';
import CarCon from '../a_container/car/';
import History from '../a_container/history/';
import Information from '../a_container/information/';
import SecondRoote from '../a_container/second-route/';
import SecRoote from '../a_container/second-route/secIndex';

import RootContainer from '../a_container/root/';

import SecondR from '../a_container/second-route/route/';

// const requireAuth = (nextStaten, replace) => {
// 	if (!localStorage.onEnter) {
// 		console.log('1235')
// 		replace({
// 			pathname: '/'
// 		});
// 	}
// }

// const loginIn = false;
const isLoginIn = () => {
	if (localStorage.isLoginIn) {
		return true;
	} else {
		return false;
	}
}

const RouterCon = () => (
	<Router>
		<div>
			<div>
				<RootContainer></RootContainer>
			</div>
			<Route
			    exact
			    path="/"
			    render={()=>(
					<Redirect to="/home" />
			    )}
			 />
			<Route path="/home" component={HomeTitle}/>
			<Route 
				path="/car"  
				render={()=> (
					isLoginIn() ? <Route component={CarCon}/>
					        : <Redirect to="/home" />
				)}
			/>
			<Route
			    path="/history" 
			    render={()=> (
					isLoginIn() ? <Route component={History}/>
					        : <Redirect to="/home" />
				)}
			/>
			<Route path="/information" component={Information}/>
			<Route
				path="/secondroote"
				render={()=> (
					<div>
						<div><SecondR></SecondR></div>
						<Route exact path="/secondroote"
							render={()=>(
								<Redirect to="/secondroote/firstroote"></Redirect>
							)}
						></Route>
						<Route path="/secondroote/firstroote" component={SecondRoote}></Route>
						<Route path="/secondroote/secondroote" component={SecRoote}></Route>
					</div>
				)}
			/>
		</div>
	</Router>
);

export default RouterCon;