import React from 'react';
import './index.less';
import { Tabs,Card, Col, Row,Button } from 'antd';
import CRUD from 'components/CRUD';
import crudConfig from './crud';
const TabPane = Tabs.TabPane;

const Filter = CRUD.Filter
const Table = CRUD.Table
const Pagination = CRUD.Pagination
function callback(key) {
  console.log(key);
}

class Sale extends React.Component {
render(){
  return(
    <div className="card-container">
       <Tabs onChange={callback} type="card">
          <TabPane tab="全部" key="1">
              <CRUD>
                <Filter {...crudConfig.filter}/>
              </CRUD>
              <CRUD>
                  <Table 
                    {...crudConfig.table} 
                  />
                  <Pagination />
              </CRUD>
          </TabPane>
          <TabPane tab="待处理" key="2">
              
          </TabPane>
          <TabPane tab="申诉中" key="3">
              
          </TabPane>
          <TabPane tab="待发货" key="4">
              
          </TabPane>
          <TabPane tab="待买家寄回" key="5">
              
          </TabPane>
          <TabPane tab="已成功" key="6">
              
          </TabPane>
          <TabPane tab="已关闭" key="7">
              
          </TabPane>
        </Tabs>
    </div>
  )}
}

export default Sale;










