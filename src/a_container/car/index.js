import React from 'react';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';

import * as TodoAction from '../../a_action/car_action';

import '../../css/car/index.css';
import '../../css/public.css';
// const Car = () => (
// 	<div>
// 		<h1>car</h1>
// 	</div>
// )

const mapStoreStateToProps = state => ({
	dispatch: state.dispatch,
	carvalue: state.car.carvalue,
	dataList: state.car.dataList,
});

const mapDispatches = dispatch => ({
	fn: {
		getDataList: (v) => {
			dispatch(TodoAction.getData(v))
		}
	}
});

class Car extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			areaList: [],
			showD01: false,
			showD02: false,
		};
		this.getData = this.getData.bind(this);
		this.getList = this.getList.bind(this);
		this._areaList = this._areaList.bind(this);
		this._dataList = this._dataList.bind(this);
	}

	componentWillMount() {
		// console.log(this.props.dataList)
	}

	// shouldComponentUpdate() {
	// 	// console.log(this.)
	// 	// console.log(this.props.dataList, '00000')
	// 	// if (this.props.dataList && this.props.dataList.length > 0) {
	// 	// 	this.props.dataList.map(item => {
	// 	// 		console.log(item);
	// 	// 	})
	// 	// } else {
	// 	// 	console.log('不存在的');
	// 	// }
	// 	console.log('在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用', '4');
	// 	return true;
	// }

	componentWillReceiveProps() {
		// console.log(this.props.carvalue)
		// console.log(this.props.dataList, '22')
	}

	getData(flag) {
		this.setState({
			showD01: true,
			showD02: false,
		}, () => {
			fetch('http://192.168.10.78:9080/business/services/v1/busiDict/projectList', {
					method: 'post',
					mode: 'cros',
					body: JSON.stringify({
						"loginName": 'fengbin',
						"userType": '1',
						"areaName": '北京龙湖',
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
						console.log(data.result, '11')
						let list = []
						data.result.map((item, index) => {
							list.push(item)
						});
						this.setState({
							areaList: list
						}, () => {
							console.log(this.state.areaList, '33')
						});
						// dispatch(receiveProducts([1, 2, 3, 4, 5]));
					})
					.catch(err => {
						console.log(err, 'err');
					}));
		});


		// let a = [{
		// 	id: 1,
		// 	value: 2
		// }];

		// let b = [];

		// for (let node of a) {
		// 	b.push(node);
		// }
		// a[0].id = 2;
		// a[0].value = 2;

		// console.log(b)

		// let d = {
		// 	value: 1
		// }
		// let e = {
		// 	value: 2
		// }
		// Object.assign({}, e, {
		// 	value: d.value
		// });
		// d.value = 3
		// console.log(Object.assign({}, e, {
		// 	value: d.value
		// }), '2222')

		// console.log(e)
	}

	getList(flag) {
		// console.log(flag)
		this.setState({
			showD01: false,
			showD02: true,
		}, () => {
			this.props.fn.getDataList(3)
		});
	}

	render() {
		return <div className="car-container main-container">
				<h1 className="car-title">{this.props.carvalue}</h1>
				<h2 className="car-detail">{1234}</h2>
				<div className="car-btn-con">
					<button onClick={()=>this.getList(this.state.showD01)}>获取资源</button>
					<button onClick={()=>this.getData(this.state.showD02)}>点击获取</button>
				</div>
				{this.state.showD01 === true ?
					this._areaList()
					: ''
				}
				{this.state.showD02 === true ?
					this._dataList()
					: ''
				}
			</div>
	}

	_areaList() {
		return (
			<div className="car-main">
				{this.state.areaList[0] ? this.state.areaList.map((product, index) => 
					<p key={'a' + index}>{product.projectname}</p>
				) : ''}
			</div>
		);
	}

	_dataList() {
		return (
			<ul className="car-main-ul">
				{this.props.dataList[0] ? this.props.dataList.map((item, index) => 
					<li key={index}>{item.areaName}</li>
				) : ''}
			</ul>
		);
	}
}

Car.propTypes = {
	dispatch: P.func,
	carvalue: P.number,
	dataList: P.array
		// fn: P.project,
}

export default connect(mapStoreStateToProps, mapDispatches)(Car);