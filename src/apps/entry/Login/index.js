import React from 'react';
import API from 'apis';
import ReactDOM from 'react-dom';
import {message} from 'antd';
import './index.less';

/**
 * 定义Login组件
 */
class Login extends React.Component {

  // 这个login组件是直接从网上找的: https://colorlib.com/wp/html5-and-css3-login-forms/
  // 不是react风格...
  // TODO: 以后要把这个login组件改掉

  handleSubmit = (e) => {
    e.preventDefault();  // 这个很重要, 防止跳转
    const hide = message.loading('正在验证...', 0);

    const userName = ReactDOM.findDOMNode(this.refs.user).value;
    const password = ReactDOM.findDOMNode(this.refs.pass).value;

    const button = ReactDOM.findDOMNode(this.refs.button);
    button.setAttribute('disabled', 'true');  // 暂时屏蔽提交按钮, 防止用户重复点击

    // 这里执行登录逻辑
    API.login({userName, password}).then(ret => {
      hide()
      if(ret.data.status == '100') {
        localStorage.setItem('token', ret.data.data.token)
        this.props.loginSuccess('测试', true)
        location.reload()
      }
    })
  }

  componentWillMount() {
    document.body.style.background = null;
  }

  componentWillUnmount() {
    // 组件unmount时设置下样式, 不然其他组件的显示会有问题
    // TODO: 不知道有没有更好的办法
    document.body.style.background = 'white';
  }

  render() {
    return (
      <div className="login-background">
        <div className="login">
          <h1>后台</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="login-input" type="text" ref="user" name="u" placeholder="用户名" required="required"/>
            <input className="login-input" type="password" ref="pass" name="p" placeholder="密码" required="required"/>
            <button ref="button" type="submit" className="btn btn-primary btn-block btn-large">登录</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Login;
