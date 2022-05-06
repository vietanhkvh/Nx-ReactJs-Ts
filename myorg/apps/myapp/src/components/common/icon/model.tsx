import * as React from 'react';

export interface IProps{
  name?: string;
  style?: any;
  innerStyle?: any;
  onClick?: any;
  onEnter?: any;
  onLeave?: any;
  className?: string;
}

export interface IState {
  defaultIcon: string;
  listIcon: Array<string>;
  hovering: boolean;
}
