import styles from './my-popup.module.scss';

/* eslint-disable-next-line */
export interface MyPopupProps {}

export function MyPopup(props: MyPopupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyPopup!</h1>
    </div>
  );
}

export default MyPopup;
