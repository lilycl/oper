import React from 'react';
import './index.less';
import CRUD from 'components/CRUD';
import crudConfig from './crud';
import { Tabs,Button,Card, Col, Row } from 'antd';

const TabPane = Tabs.TabPane;

const Filter = CRUD.Filter
const Table = CRUD.Table
const Pagination = CRUD.Pagination


function callback(key) {
  console.log(key);
}

class Order extends React.Component {
render(){
  return(
    <div className="card-container">
      <Tabs onChange={callback} type="card">
        <TabPane tab="处罚管理" key="1">
            <CRUD>
              <Filter {...crudConfig.filter}/>
              <Button >搜索</Button>
            </CRUD>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="全部（0）" key="1"></TabPane>
              <TabPane tab="待财务审核（0）" key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab="财务已通过（0）" key="3">Content of Tab Pane 3</TabPane>
              <TabPane tab="财务已驳回（0）" key="4">Content of Tab Pane 4</TabPane>
            </Tabs>
            <CRUD>
                <Table 
                  {...crudConfig.table} 
                />
                <Pagination />
            </CRUD>

        </TabPane>
        <TabPane tab="商家积分管理" key="2">
            <div style={{  padding: '30px' }}>
              <Row>
                <Col span="6">
                  <Card title="666666" bordered={false}>严重违规商家数</Card>
                </Col>
                <Col span="6">
                  <Card title="14670" bordered={false}>保证金总额</Card>
                </Col>
                <Col span="6">
                  <Card title="10" bordered={false}>保证金扣除金额</Card>
                </Col>
                <Col span="6">
                  <Card title="10" bordered={false}>保证余额不足商家数</Card>
                </Col>
              </Row>
            </div>
            <CRUD>
                <Table 
                  {...crudConfig.table} 
                />
                <Pagination />
            </CRUD>
        </TabPane>
      </Tabs>
    </div>
  )}
}

export default Order;