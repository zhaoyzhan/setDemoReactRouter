import React from 'react';

import {
	Link
} from 'react-router-dom';

import {
	connect
} from 'react-redux';


class RootContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log('daohangye ');
	}

	render() {
		return (
			<div className="fl">
		          <Link to="/home">主页</Link>
		          <Link to="/car">购物车</Link>
		          <Link to="/history">购买记录</Link>
		          <Link to="/information">个人信息</Link>
		          <Link to="/secondroote">二级路由</Link>
		    </div>
		);
	}
}


/*代码类型检查*/
// RootContainer.propTypes = {};

export default connect()(RootContainer);