module.exports = {
  show: false,
  notShowSearch: false,
  position: 'left',
  schema: [
    {
      key: 'type',
      label: '类型',
      widget: 'Switch',
      ext: {
        items: [
          {
            key: 0,
            name: '全部'
          }, {
            key: 1,
            name: '发货前退款'
          }, {
            key: 2,
            name: '拒收退款'
          }, {
            key: 3,
            name: '退货退款'
          }, {
            key: 4,
            name: '仅退款'
          }, {
            key: 5,
            name: '换货'
          }
        ]
      }
    },
    {
      key: 'typed',
      label: '订单号',
      dataType: 'varchar',
      widget: 'Select',
      ext: {
        options: [
          {
            key: '0',
            value: '全部'
          }
        ]
      }
    },{
      key: 'typepart',
      label: ' ',
      dataType: 'varchar',
      widget: 'Input',
      ext: {
        options: [
          {
            key: '0',
            value: '全部'
          }
        ]
      }
    },{
      key: 'typereason',
      label: '选择下单时间',
      dataType: 'datetime',
      widget: 'Input',
    },{
      key: 'reduce',
      label: '买家名称',
      dataType: 'number',
      widget: 'Select',
      ext: {
        options: [
          {
             key: '0',
             value: '全部'
          },
          {
            key: '1',
            value: '2'
          }
        ]
      }
    }
  ]
}









