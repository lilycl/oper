/**
 * 定义sidebar中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有顶层的菜单可以带图标;
 * 3.只有"叶子"节点才能跳转;
 * 4.所有的key都不能重复;
 */
const menus = [
  {
    key: 'index',  // route时url中的值
    name: '主页',  // 在菜单中显示的名称
    icon: 'smile',  // 只有顶层菜单可以带图标
  },
  {
    key: 'goods',
    name: '商品',
    icon: 'appstore',
  },
  {
    key: 'order',
    name: '订单',
    icon: 'appstore',
  },
  {
    key: 'sale',
    name: '售中／售后',
    icon: 'customer-service',
  },
  {
    key: 'developer',
    name: '开发者',
    icon: 'code',
  },
  {
    key: 'marketing',
    name: '营销',
    icon: 'star',
  },
  {
    key: 'setting',
    name: '设置',
    icon: 'star',
  }
];

if(true) {
  menus.push({
    key: 'finance',
    name: '财务',
    icon: 'appstore',
  })
}

module.exports = menus