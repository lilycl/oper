import React from 'react';
import './index.less';
import CRUD from 'components/CRUD'

import config from './crud'

/**
 * 展示欢迎界面
 */
class Welcome extends React.Component {

  render() {
    return (
      <CRUD config={config} />
    );
  }

}

export default Welcome;
