import React from 'react';

import $ from 'jquery';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';
//本页面所需action
import * as TodoAction from '../../a_action/home_action';

import '../../css/public.css';


// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	testvalue: state.home.inputvalue,
});

// 本页面所需action

// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
	fn: {
		onTestAdd: (v) => {
			dispatch(TodoAction.addNum(v));
		},
		onTestCut: (v) => {
			dispatch(TodoAction.cutNum(v));
		},
	},
});

class HomeTitle extends React.Component {
	AddNum() {
		console.log('+');
	}
	CutNum() {
		console.log('-');
	}
	onPutOn() {
		console.log('2222');
		$.get('http://localhost:8880/introduce', (res) => {
			console.log(res, 'qqqq');
		});
		// localStorage.setItem('isLoginIn', 'Y');
	}
	offPutOn() {
		localStorage.removeItem('isLoginIn');
	}
	componentDidMount() {
		console.log('shouye');
	}
	componentWillReceiveProps() {
		console.log(this.props.testvalue);
		// console.log(this.props.dataList, '22')
	}
	render() {
		return <div className="main-container">
			<h1>home 22 eee333 title</h1>
			<h2>{this.props.testvalue}</h2>
			<button onClick={()=>this.props.fn.onTestAdd(this.props.testvalue)}>+</button>
			<button onClick={()=>this.props.fn.onTestCut(this.props.testvalue)}>-</button>
			<br/>
			<button onClick={this.onPutOn}>允许登陆</button>
			<br/>
			<button onClick={this.offPutOn}>退出登陆</button>
		</div>
	}
}

HomeTitle.propTypes = {
	testvalue: P.number,
	dispatch: P.func,
	fn: P.object,
}

export default connect(mapStoreStateToProps, mapDispatches)(HomeTitle);