import React from 'react'
import './index.less'
import API from 'apis'

import { Tabs, Modal, Row, Col, Form  } from 'antd'

import CRUD from 'components/CRUD'
import config from './crud'
import Detail from './Detail'

const FormItem = Form.Item
const TabPane = Tabs.TabPane

/**
 * 展示欢迎界面
 */
class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			detail: {
				
			}
		}
	}


	onShowDetail(text, record) {
	    API.hhh.get().then(ret => {
			this.setState({
				detail: ret.data.data
			})
        });
	    
		this.setState({
		  visible: true,
		})
	}

	onCheck(text,record){
 
	}

	handleOk() {
		this.setState({
		  visible: false,
		  detail: {
				
			}
		})
	}

	handleCancel(e) {
		this.setState({
		  visible: false,
		  detail: {}
		})
	}

	render() {
		const { detail } = this.state

		return (
			<div className="card-container">
			  	<CRUD 
				  config={config} 
				  onShowDetail={this.onShowDetail.bind(this)} 
				  onCheck={this.onCheck.bind(this)}
				/>

				<Modal title="查看" visible={this.state.visible}
				  	   onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
				>
					<Detail detail={detail} />
				</Modal>
			</div>
		)
	}

}

export default App
