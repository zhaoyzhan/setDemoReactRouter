import {
	combineReducers
}
from 'redux';

import HomeReducer from './home-reducer';
import CarReducer from './car-reducer';

const RootReducer = combineReducers({
	home: HomeReducer,
	car: CarReducer,
});

export default RootReducer;