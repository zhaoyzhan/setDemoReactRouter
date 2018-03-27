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

	componentDidMount() {}

	render() {
		return (
			<div className="fl">
		          <Link to="/secondroote/firstroote">第一个路由</Link>
		          <Link to="/secondroote/secondroote">第二个路由</Link>
		    </div>
		);
	}
}


/*代码类型检查*/
// RootContainer.propTypes = {};

export default connect()(RootContainer);