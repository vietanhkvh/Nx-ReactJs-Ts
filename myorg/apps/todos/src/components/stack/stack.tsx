import { ReactNode } from 'react';
import styles from './stack.module.scss';

/* eslint-disable-next-line */
export interface StackProps {
  children?: ReactNode[] | ReactNode;
  numberOfChildren?: number;
}

const Stack = (props: StackProps) => {
  const { children } = props;
  return <div className={styles['container']}>{children}</div>;
};

export default Stack;
