import React from 'react';

import '../../css/public.css';

import '../../css/history/index.css';

//分页组件

import ListPage from '../../a_content/history-content/history-paging';

class History extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.kaishi = this.kaishi.bind(this);
		this.guanbi = this.guanbi.bind(this);
	}

	kaishi() {
		var docElm = document.documentElement;
		//W3C   
		if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
		}
		//FireFox   
		else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		}
		//Chrome等   
		else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		}
		//IE11   
		else if (docElm.msRequestFullscreen) {
			docElm.msRequestFullscreen();
		}
	}

	guanbi() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (<div className="main-container">
					<div className="history-control-btn">
						<input id="Button1" type="button" value="开始全屏" onClick={this.kaishi} />  
						<input id="Button2" type="button" value="关闭全屏" onClick={this.guanbi} /> 
					</div>
					<div className="history-content">
						<ListPage></ListPage>
					</div>
				</div>);
	}
}

export default History;