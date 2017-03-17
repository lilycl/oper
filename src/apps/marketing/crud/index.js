import API from 'apis'
import React from 'react'

module.exports = {
  schema: require('./schema'),
  
  // 请求配置
  ajax: {
    query: API.investment.get,
    add: API.investment.save,
    edit: API.investment.update,
    delete: API.investment.remove
  },
  
  // 每页都少条数据
  pageSize: 50,

  // 是否显示checkbox
  rowSelection: true,

  // Filter面板配置
  filter: {
    show: true
  },
 
  // 是否允许批量更新
  batchUpdate: false,

  // 按钮整体配置
  buttons: {
    add: { show: true, title: '新增商家' },
    edit: { show: false },
    delete: { show: false },
    actions: [
      {
        render: (obj) => {
          return <a>查看</a>
        },
        events: [
          {name: 'onClick', action: 'onShowDetail'}
        ]
      },
      {
        render: (obj) => {
          if(obj.vendorStatus == '待审核') {
            return <a style={{marginLeft: 10}}>审核</a>
          }
        },
        events: [
          {name: 'onClick', action: 'onCheck'}
        ]
      },
      {
        render: (obj) => {
          if(obj.vendorStatus == '审核不通过') {
            return <a style={{marginLeft: 10}}>失败原因</a>
          }
        },
        events: [
          {name: 'onClick', action: 'onShowLog'}
        ]
      }
    ]
  }
}