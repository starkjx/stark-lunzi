import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="alipay"/>
      <Icon name="wechat"/>
      <Icon name="qq"/>
      <Icon name="ctrip" />
    </div>
  );
};

export default IconExample;