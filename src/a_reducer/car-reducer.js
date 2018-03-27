//多层赋值
// import update from 'react-addons-update';

const initState = {
	carvalue: 10,
	dataList: [],
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state) => state;

// const testAdd = (state, action) => {
// 	const {
// 		payload
// 	} = action;
// 	// 原本初始的时候，inputvalue,这里将最新的payload覆盖原来的值
// 	return Object.assign({}, state, {
// 		inputvalue: payload,
// 	});
// };

// const testCut = (state, action) => {
// 	const {
// 		payload
// 	} = action;
// 	return Object.assign({}, state, {
// 		inputvalue: payload,
// 	});
// };

const getData = (state, action) => {
	const {
		products
	} = action;
	// state.dataList = products;
	state.dataList.splice(0, state.dataList.length)
	let listData = [...products, ...state.dataList]
	return Object.assign({}, state, {
		dataList: listData,
	});
	// return update(state, {
	// 	dataList: $push(products),
	// })
}

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		case 'DATA::get':
			console.log(action, 'action');
			return getData(state, action);
			// break;
		default:
			return actDefault(state, action);
			// break;
	}
};

export default reducerFn;