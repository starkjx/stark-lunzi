import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
// 测试添加注释
const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {
    return (
      <svg className={classes('starkui-icon', className)}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;