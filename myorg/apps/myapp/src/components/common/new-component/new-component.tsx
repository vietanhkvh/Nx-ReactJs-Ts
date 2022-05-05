import styles from './new-component.module.scss';

/* eslint-disable-next-line */
export interface NewComponentProps {}

export function NewComponent(props: NewComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewComponent!</h1>
    </div>
  );
}

export default NewComponent;
