/**
 * 程序的入口, 类似java中的main
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

// 开始引入各种自定义的组件
import App from './apps/entry/App'
import Welcome from './apps/entry/Welcome'
import Error from './apps/entry/Error'

import Index from './apps/index'
import Goods from './apps/goods'
import Order from './apps/order'
import Sale from './apps/sale'
import Developer from './apps/developer'
import Marketing from './apps/marketing'
import Finance from './apps/finance'
import Setting from './apps/setting'

import './base.less'

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="index" component={Welcome} />
      <Route path="goods" component={Goods} />
      <Route path="order" component={Order} />
      <Route path="sale" component={Sale} />
      <Route path="developer" component={Developer} />
      <Route path="marketing" component={Marketing} />
      <Route path="finance" component={Finance} />
      <Route path="setting" component={Setting} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
