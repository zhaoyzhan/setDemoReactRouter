export const addNum = productNum => ({
	type: 'TEST::add',
	payload: productNum + 1,
});
//延迟执行
const setTime = productNum => ({
	type: 'TEST::cut',
	payload: productNum - 1,
});

export const cutNum = productNum => dispatch => {
	setTimeout(() => {
		dispatch(setTime(productNum));
	}, 2000);
}