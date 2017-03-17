import React from 'react';
import { Row, Col, Button, Form, Card, Input,Checkbox,Select,Radio,Modal,Icon} from 'antd'
import './index.less';
import Uploader from 'components/Uploader'

const FormItem = Form.Item
const RadioGroup = Radio.Group;
class Setting extends React.Component {
state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
//提交按钮	
handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

//弹框
state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }	
  render() {
    const { form:{ getFieldDecorator } } = this.props
 const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 14,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
		
    return (
			<div style={{fontSize: '20px' }}>商家设置
      <Card title="基本信息" style={{margin: '30px' }}>
          <ul className="setting-basic">
              <li>
              <label>公司名称<i>*</i></label>
              <span>
                  千禧科技股份有限公司  
              </span>
              </li>
              <li>
              <label>入驻平台<i>*</i></label>
              <span>
                  <Checkbox>质选</Checkbox>
                  <Checkbox>米动商城</Checkbox>
              </span>
              </li>
              <li>
              <label>一级类目<i>*</i></label>
              <span>
                  运动>运动鞋 运动>运动鞋 运动>运动鞋   
              </span>
              </li>
              <li>
              <label>商家联系人<i>*</i></label>
              <span>
                  李千玺     
              </span>
              </li>  
              <li>
              <label>商家邮箱<i>*</i></label>
              <span>
                  4346578@qq.com       
              </span>
              </li>
          </ul>
      </Card>
			<Form onSubmit={this.handleSubmit}>
			<Card title="基本信息" style={{margin: '30px' }}>
				<Button type="label" onClick={this.showModal} style={{margin: '10px'}}><Icon type="question-circle" />商家入驻说明</Button>
				<Row gutter={24}>
					<Col span={12}>
				<FormItem
					label={'商家名称'}
					{...formItemLayout}
				>
					{getFieldDecorator('confirm', {
						rules: [{
							required: true, message: '商家名称',
						}],
					})(
						<Input />
					)}
				</FormItem>
				</Col>
				<Col span={12}>
				<FormItem
					label={'商家简介'}
					{...formItemLayout}
				>
					{getFieldDecorator('confirm', {
						rules: [{
							required: true, message: '商家名称',
						}],
					})(
						<Input />
					)}
				</FormItem>
				</Col>
					</Row>
					
				<FormItem
					label={'商家logo'}
					{...formItemLayout}
				>
				{getFieldDecorator('confirm', {
						rules: [{
							required: true, message: '商家logo',
						}],
					})(
						<Uploader />	
					)}
					<div>上传要求：尺寸不得小于100*100</div>
				</FormItem>
			</Card>
			<Card title="第一联系人" style={{margin: '30px' }}>
				<Row gutter={12}>
					<Col span={6}>
				<FormItem
					label={'姓名'}
					{...formItemLayout}
				>
					{getFieldDecorator('name', {
						rules: [{
							required: true, message: '姓名',
						}],
					})(
						<Input />
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'职务'}
					{...formItemLayout}
				>
					{getFieldDecorator('job', {
						rules: [{
							required: true, message: '职务',
						}],
					})(
						<Input />
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'电话'}
					{...formItemLayout}
				>
					{getFieldDecorator('phone', {
						rules: [{
							required: true, message: '电话',
						}],
					})(
						<Input type="tel"/>
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'QQ'}
					{...formItemLayout}
				>
					{getFieldDecorator('qq', {
						rules: [{
							required: true, message: 'qq',
						}],
					})(
						<Input type="tel"/>
					)}
				</FormItem>
					</Col>
				</Row>
			</Card>
			<Card title="第二联系人" style={{margin: '30px' }}>
				<Row gutter={12}>
					<Col span={6}>
				<FormItem
					label={'姓名'}
					{...formItemLayout}
				>
					{getFieldDecorator('name2', {
						rules: [{
							required: true, message: '姓名',
						}],
					})(
						<Input />
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'职务'}
					{...formItemLayout}
				>
					{getFieldDecorator('job2', {
						rules: [{
							required: true, message: '职务',
						}],
					})(
						<Input />
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'电话'}
					{...formItemLayout}
				>
					{getFieldDecorator('phone2', {
						rules: [{
							required: true, message: '电话',
						}],
					})(
						<Input type="tel"/>
					)}
				</FormItem>
					</Col>
					<Col span={6}>
				<FormItem
					label={'QQ'}
					{...formItemLayout}
				>
					{getFieldDecorator('qq2', {
						rules: [{
							required: true, message: 'qq',
						}],
					})(
						<Input type="tel"/>
					)}
				</FormItem>
					</Col>
				</Row>
			</Card>
			<Card title="企业资质" style={{margin: '30px' }}>
				<FormItem
					label={'企业营业执照副本'}
					{...formItemLayout}
				>
				{getFieldDecorator('11', {
						rules: [{
							required: true, message: '企业营业执照副本',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<FormItem
					label={'企业税务登记证'}
					{...formItemLayout}
				>
				{getFieldDecorator('22', {
						rules: [{
							required: true, message: '企业税务登记证',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<FormItem
					label={'组织机构代码证'}
					{...formItemLayout}
				>
				{getFieldDecorator('33', {
						rules: [{
							required: true, message: '组织机构代码证',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<FormItem
					label={'银行开户许可证'}
					{...formItemLayout}
				>
				{getFieldDecorator('44', {
						rules: [{
							required: true, message: '银行开户许可证',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<FormItem
					label={'法定代表人身份证正反面'}
					{...formItemLayout}
				>
				{getFieldDecorator('55', {
						rules: [{
							required: true, message: '法定代表人身份证正反面',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<div>上传要求：授权证明请扫描上传，要求字迹清晰</div>
			</Card>
			<Card title="行业资质" style={{margin: '30px' }}>
				<Row gutter={24}>
					<Col span={12}>
				<FormItem
					label={'商家类型'}
					{...formItemLayout}
				>
				{getFieldDecorator('radio1', {
						rules: [{
							required: true, message: '商家类型',
						}],
					})(
						<RadioGroup onChange={this.onChange} value={this.state.value}>
							<Radio value={1}>非生产厂商</Radio>
							<Radio value={2}>生产厂商</Radio>
						</RadioGroup>
					)}
				</FormItem>
					</Col>
					<Col span={12}>
				<FormItem
					label={'进口类型'}
					{...formItemLayout}
				>
				{getFieldDecorator('radio2', {
						rules: [{
							required: true, message: '进口类型',
						}],
					})(
						<RadioGroup onChange={this.onChange} value={this.state.value}>
							<Radio value={1}>非进口</Radio>
							<Radio value={2}>进口</Radio>
						</RadioGroup>
					)}
				</FormItem>
					</Col>
				</Row>
				<FormItem
					label={'食品流通许可证'}
					{...formItemLayout}
				>
				{getFieldDecorator('radio3', {
						rules: [{
							required: true, message: '食品流通许可证',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<FormItem
					label={'全国工业产品生产许可证'}
					{...formItemLayout}
				>
				{getFieldDecorator('radio4', {
						rules: [{
							required: true, message: '全国工业产品生产许可证',
						}],
					})(
						<Uploader />	
					)}
				</FormItem>
				<div>上传要求：授权证明请扫描上传，要求字迹清晰</div>
			</Card>
			<FormItem {...tailFormItemLayout} >
				<Button type="primary" htmlType="submit" size="large" style={{margin: '30px 170px 0px 80px ' }}>保存</Button>
				<Button type="label" htmlType="submit" size="large">提交审核</Button>
			</FormItem>
		</Form>
		<Modal title="商家入驻说明" visible={this.state.visible}
			onOk={this.handleOk} onCancel={this.handleCancel}
		>
			<p>some contents...</p>
		</Modal>
    </div>
      
    )
  }

}

export default Form.create({
  onFieldsChange(props, fields) {
    const keys = Object.keys(fields)
    if(keys.length > 0) {
      props.onFormChange && 
      props.onFormChange({[keys[0]]: fields[keys[0]].value})
    }
  }
})(Setting)