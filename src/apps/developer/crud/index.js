import API from 'apis'

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
    add: { show: false, title: '添加' },
    edit: { show: false },
    delete: { show: true },
    actions : [
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
            return <a>备注</a>
          },
          events: [
            {name: 'onClick', action: 'onShowDetail'}
          ]
        },
        {
          render: (obj) => {
            return <a>备注</a>
          },
          events: [
            {name: 'onClick', action: 'onShowDetail'}
          ]
        },
    ]
  }
}