const initState = {
	inputvalue: 10,
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state) => state;

const testAdd = (state, action) => {
	const {
		payload
	} = action;
	// 原本初始的时候，inputvalue,这里将最新的payload覆盖原来的值
	return Object.assign({}, state, {
		inputvalue: payload,
	});
};

const testCut = (state, action) => {
	const {
		payload
	} = action;
	return Object.assign({}, state, {
		inputvalue: payload,
	});
};

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		case 'TEST::add':
			return testAdd(state, action);
			// break;
		case 'TEST::cut':
			return testCut(state, action);
			// break;
		default:
			return actDefault(state, action);
			// break;
	}
};

export default reducerFn;