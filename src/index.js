import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import Router from './route/';

import './css/index.css';

import store from './store/';

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();