
module.exports = [
  {
    key: 'ID', 
    label: 'ID',
    dataType: 'int',
    primary: true,
    width: '60px'
  },

  {
    key: 'name',
    label: '名字',
    dataType: 'varchar',
    showAdd: true,
    showEdit: true,
    widget: 'Input',
    width: '120px',
  },

  {
    key: 'filename',
    label: '文件名称',
    dataType: 'varchar',
    widget: 'Input',
    showAdd: true,
    showEdit: true,
    rules: [
      { required: true, message: '请输入文件名称', type: 'string' },
    ],
  },

  {
    key: 'file',
    label: '文件',
    dataType: 'varchar',
    widget: 'File',
    showAdd: true,
    showEdit: true,
    notShow:true,
    rules: [
      { required: true, message: '请上传课件文件', type: 'string' },
    ],
  },

]