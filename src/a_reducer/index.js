import {
	combineReducers
}
from 'redux';

import HomeReducer from './home-reducer';

const RootReducer = combineReducers({
	home: HomeReducer,
});

export default RootReducer;