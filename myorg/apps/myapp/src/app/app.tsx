// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';
import MyComponent from '../components/common/my-component/my-component'
import NewComponent from '../components/common/new-component/new-component'
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      {/* <NxWelcome title="myapp" /> */}
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <MyComponent/>
          }
        />
        <Route
          path="/page-2"
          element={
            <NewComponent/>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
