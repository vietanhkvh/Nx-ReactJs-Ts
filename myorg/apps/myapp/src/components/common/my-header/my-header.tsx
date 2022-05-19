import styles from './my-header.module.scss';

/* eslint-disable-next-line */
export interface MyHeaderProps {}

const a = ['Contact', 'About', 'Login'];
export function MyHeader(props: MyHeaderProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <span>Logo</span>
      </div>
      <div className={styles['button-group']}>
        {a.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </div>
    </div>
  );
}

export default MyHeader;
