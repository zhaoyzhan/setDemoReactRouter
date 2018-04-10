import React from 'react';
import $ from 'jquery';

import '../../css/information/index.css';

class Information extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataList: {},
		};
		this._infoCon = this._infoCon.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.setInfo = this.setInfo.bind(this);
	}

	componentDidMount() {
		this._isMounted = true
		$.post('http://localhost:8000/postData', {
			name: 'wangwu'
		}, (res) => {
			if (this._isMounted) {
				this.setState({
					dataList: res.result
				});
			}
			// console.log(this.state.dataList);
		})
	}
	componentWillUnmount() {
		this._isMounted = false
	}

	getInfo() {
		let passName = document.getElementsByClassName('passName')[0].value;
		if (passName !== '') {
			$.post('http://localhost:8000/postData', {
				name: passName
			}, (res) => {
				// console.log(res);
				this.setState({
					dataList: res.result
				});
				// console.log(this.state.dataList);
			})
		} else {
			alert('不能为空');
		}
	}

	setInfo() {
		let setName = document.getElementsByClassName('setName')[0].value;
		let setAge = document.getElementsByClassName('setAge')[0].value;
		let setTel = document.getElementsByClassName('setTel')[0].value;
		if (setName !== '' && setAge !== '' && setTel !== '') {
			$.post('http://localhost:8000/setData', {
				name: setName,
				age: setAge,
				tel: setTel
			}, (res) => {
				// this.setState({
				// 	dataList: res.result
				// });
				// console.log(res)
				if (res.code && res.code === 200) {
					alert('保存成功');
					document.getElementsByClassName('setName')[0].value = '';
					document.getElementsByClassName('setAge')[0].value = '';
					document.getElementsByClassName('setTel')[0].value = '';
				}
				// console.log(this.state.dataList);
			});
		} else {
			alert('不能为空');
		}
	}

	deleteInfo() {
		let deleName = document.getElementsByClassName('deleName')[0].value;
		if (deleName !== '') {
			$.post('http://localhost:8000/deleteData', {
				name: deleName
			}, (res) => {
				if (res.code && res.code === 200) {
					alert(res.message);
					document.getElementsByClassName('deleName')[0].value = '';
				}
			})
		} else {
			alert('不能为空');
		}

	}

	render() {
		return (
			<div className="informa-con main-container">
				<div className='searchInfo'>
					<div className="getInfoBtn">
						<p>信息查询</p>
						输入姓名: <input type="text" className="passName"/><button onClick={this.getInfo}>确定</button>
					</div>
					<div className="getInfoCon">			
						{this._infoCon(this.state.dataList)}
					</div>
				</div>
				<div className="setInfo">
					<p>姓名: <input type="text" className="setName" /></p>
					<p>年龄: <input type="text" className="setAge"/></p>
					<p>电话: <input type="text" className="setTel"/></p>
					<p><input type="button" className="setInfoBtn" value="提交" onClick={this.setInfo}/></p>
				</div>
				<div className="deleteInfo">
					<p>姓名: <input type="text" className="deleName"/><button onClick={this.deleteInfo}>删除</button></p>
				</div>
			</div>
		)
	}

	_infoCon(data) {
		// if()
		// console.log(data);
		if (data.name) {
			return <div className='infoCon'>
				<h1>姓名:{data.name}</h1>
				<h2>年龄:{data.age}</h2>
				<h3>电话:{data.tel}</h3>
			</div>
		} else {
			return <div className='infoCon'>
				<h1>暂无此人信息</h1>
			</div>
		}

	}
}

export default Information;