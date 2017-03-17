module.exports = {
  show: false,
  notShowSearch: true,
  position: 'left',
  schema: [
    {
      key: 'name',
      label: '商家名称',
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
    },
    {
      key: 'type',
      label: '违规类型',
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
      label: '违规模块',
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
      key: 'typereason',
      label: '违规原因',
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
      key: 'reduce',
      label: '扣分',
      dataType: 'number',
      widget: 'Input',
      ext: {
        options: [
          {
            key: '0'
          },
          {
            key: '2'
          }
        ]
      }
    }
    ,{
      key: 'reducemoney',
      label: '扣保证金',
      dataType: 'number',
      widget: 'Input',
      ext: {
        options: [
          {
            key: '0'
          }
        ]
      }
    }
  ]
}









