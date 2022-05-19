// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';
import MyComponent from '../components/common/my-component/my-component';
import NewComponent from '../components/common/new-component/new-component';
import { Route, Routes, Link } from 'react-router-dom';
import SubmitButton from '../components/common/submit-button';
import Loading from '../components/common/loading';
import MyForm from '../components/common/my-form/my-form';
export function App() {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>header</div>
      <div className={styles['body']}>body</div>
      <div className={styles['footer']}>footer</div>
    </div>
  );
}

export default App;
