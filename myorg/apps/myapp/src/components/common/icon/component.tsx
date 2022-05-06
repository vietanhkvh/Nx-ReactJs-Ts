import * as React from 'react';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { ICON } from './constant';
import styles from './style.module.css';

interface IconProps {
  name: string;
  id?: string;
  type?: string;
  link?: string;
  className?: string;
  onClick?: (param0?: any) => any;
}
const Icon = React.forwardRef<any, IconProps>((
  {
    id = '',
    name,
    className,
    onClick = (_) => { },
    type = 'normal',
    link = ''
  },
  ref
) => {
  if (!ICON.hasOwnProperty(name)) return null;

  const IconSvg = ICON[name];
  const iconProps = {
    id,
    className: classnames(styles['icon'], className),
    ref,
    onClick: (e:any) => 'function' === typeof onClick && onClick(e)
  };

  switch (type) {
    case 'normal':
      return (
        <div {...iconProps}>
          <Suspense fallback="">
            <IconSvg />
          </Suspense>
        </div>
      );

    case 'link':
      return (
        <NavLink {...iconProps} to={link}>
          <Suspense fallback="">
            <IconSvg />
          </Suspense>
        </NavLink>
      );

    default:
      return null;
  }
});

export default Icon;
