// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState, FunctionComponent } from 'react';
import styles from './app.module.scss';
import { Todos } from '@myorg/ui';
import { Todo } from '@myorg/data';
import Button from '../components/button/button';
import Stack from '../components/stack/stack';

interface AppProps {
  pro?: string;
}
export const App: FunctionComponent<AppProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);
  /////////////////////event
  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const handleAddTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };
  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <Button handleAddTodo={handleAddTodo} />
      <Stack>
        {[...Array(3).keys()].map((n) => (
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {n + 1}
          </div>
        ))}
      </Stack>
    </>
  );
};

export default App;
