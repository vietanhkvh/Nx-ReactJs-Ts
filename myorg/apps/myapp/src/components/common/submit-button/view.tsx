import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { mergeStyle } from '../../../utils/responsive';

import SvgIcon from '../icon/index';
import Icon from '../icon/index';
import Loading from '../loading';

import STYLE from './style';
import styles from './style.module.scss';
import { IProps } from './model';

const buttonContent:React.FC<any> = ({
  loading,
  icon,
  svgIcon,
  svgIconClass,
  iconPosition,
  styleIcon,
  size,
  titleStyle,
  titleClass,
  title,
  color
}) => {
  const iconProps = {
    name: icon,
    style: Object.assign({}, STYLE.icon, 'small' === size && STYLE.smallIcon, styleIcon)
  };

  return (
    <>
      {false === loading && (
        <div className={classNames(styles['content'], 'right' === iconPosition && styles['reverseContent'])}>
          {svgIcon ? (
            <SvgIcon name={svgIcon} className={classNames(styles['submitIconSVG'], svgIconClass)} />
          ) : (
            '' !== icon && <Icon {...iconProps} />
          )}
          <div
            className={titleClass}
            style={mergeStyle(
              STYLE.title,
              STYLE.title[size],
              ('red' === color || 'pink' === color || 'black' === color) && STYLE.title.bold,
              titleStyle
            )}
          >
            {title}
          </div>
        </div>
      )}

      {true === loading && <Loading style={STYLE.iconLoading} />}
      {false === loading && <div className={styles['overlay']}></div>}
    </>
  );
};

const renderView = ({ props }:any) => {
  const {
    disabled,
    title,
    loading,
    style,
    className,
    titleStyle,
    titleClass,
    styleIcon,
    svgIconClass,
    color,
    iconPosition,
    icon,
    svgIcon,
    size,
    testId,
    type,
    link,
    linkTarget,
    onSubmit
  } = props as IProps;

  const containerProps = {
    style: mergeStyle(STYLE.sizeList[size], STYLE.colorList[color], style),
    onClick: () => !disabled && !loading && onSubmit && onSubmit(),
    className: classNames(
      styles['submitButton'],
      styles[`color-${color}`],
      loading && styles['isLoading'],
      disabled && styles['isDisabled'],
      className
    ),

    'data-testid': testId
  };

  const linkProps = {
    ...containerProps,
    onClick: (event:any) => disabled && event.preventDefault(),
    to: link || '',
    target: linkTarget
  };

  switch (type) {
    case 'force-link':
      return (
        <a {...linkProps} href={link}>
          {buttonContent({
            loading,
            icon,
            svgIcon,
            svgIconClass,
            iconPosition,
            styleIcon,
            size,
            titleStyle,
            titleClass,
            title,
            color
          })}
        </a>
      );

    case 'link':
      return (
        <NavLink {...linkProps}>
          {buttonContent({
            loading,
            icon,
            svgIcon,
            svgIconClass,
            iconPosition,
            styleIcon,
            size,
            titleStyle,
            titleClass,
            title,
            color
          })}
        </NavLink>
      );

    case 'submit':
      return (
        <div {...containerProps}>
          {' '}
          {buttonContent({
            loading,
            icon,
            svgIcon,
            svgIconClass,
            iconPosition,
            styleIcon,
            size,
            titleStyle,
            titleClass,
            title,
            color
          })}{' '}
        </div>
      );

    default:
      return null;
  }
};

export default renderView;
