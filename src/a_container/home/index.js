import React from 'react';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';
//本页面所需action
import * as TodoAction from '../../a_action/home_action';


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
		}
	},
});

class HomeTitle extends React.Component {
	AddNum() {
		console.log('+');
	}
	CutNum() {
		console.log('-');
	}
	componentDidMount() {
		console.log('shouye')
	}
	render() {
		return <div>
			<h1>home 22 333 title</h1>
			<h2>{this.props.testvalue}</h2>
			<button onClick={()=>this.props.fn.onTestAdd(this.props.testvalue)}>+</button>
			<button onClick={()=>this.props.fn.onTestCut(this.props.testvalue)}>-</button>
		</div>
	}
}

HomeTitle.propTypes = {
	testvalue: P.number,
	dispatch: P.func,
	fn: P.object,
}

// const HomeT = () => {
// 	const sayHi = () => {
// 		alert('12344hi')
// 	};
// 	return (
// 		<div>
// 			<h1 onClick={sayHi}>hommmm</h1>
// 		</div>
// 	);
// };

export default connect(mapStoreStateToProps, mapDispatches)(HomeTitle);