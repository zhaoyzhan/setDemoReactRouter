import 'whatwg-fetch';

export const getData = v => dispatch => {
	setTimeout(() => {
		fetch('http://192.168.10.78:9080/business/services/v1/busiDict/areaList', {
				method: 'post',
				mode: 'cros',
				body: JSON.stringify({
					"loginName": 'fengbin',
					"userType": '1'
				}),
				headers: {
					'Content-Type': 'application/json',
					"version": "v1",
					"platform": "ios",
					'token': '7e2d0ec641474c1985758959825cc1f9de29b2f02be84d90b9a7dc1edf731eba',
				}
			})
			.then(response => response.json()
				.then(data => {
					// console.log(data)
					dispatch(receiveProducts(data.result));
					// dispatch(receiveProducts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
				})
				.catch(err => {
					console.log(err, 'err');
				}));
	}, 0)
};

const receiveProducts = products => ({
	type: 'DATA::get',
	products: products
});

export const setTime = v => ({
	type: 'TEST::add',
	products: v + 2,
});