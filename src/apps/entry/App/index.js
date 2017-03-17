import React from 'react';
import {Spin, message} from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Login from '../Login';
import Breadcrumb from '../Breadcrumb';
import API from 'apis'

import './index.less';

/**
 * App组件
 * 定义整个页面的布局
 */
class App extends React.Component {

  // 全局的状态
  state = {
    loading: false,  // 是否在loading状态
    login: localStorage.getItem('token'),  // 是否登录
    userName: '未登录',  // 登录后的用户名
  };

  // 登录成功后的回调
  loginSuccess = (name, showMsg) => {
    if (showMsg)
      message.success('登录成功');
    this.setState({loading: false, login: true, userName: name});
  }

  render() {
    // 显示一个加载中
    if (this.state.loading) {
      return <div className="center-div"><Spin spinning={this.state.loading} size="large"/></div>;
    }

    // 跳转到登录界面
    if (!this.state.login) {
      return <Login loginSuccess={this.loginSuccess}/>;
    }

    return (
      <div className="ant-layout-aside">
        {/*整个页面被一个ant-layout-aside的div包围, 分为sidebar/header/footer/content等几部分*/}
        <Sidebar />

        <div id="main-content-div" className="ant-layout-main">

          <Spin spinning={this.state.loading} size="large">
            <Header userName={this.state.userName}/>
            <Breadcrumb {...this.props} />

            {/*TODO: 这里要组件化*/}
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                {this.state.loading ? '' : this.props.children}
              </div>
            </div>

            <Footer />
          </Spin>

        </div>
      </div>
    );
  }
}

export default App;
