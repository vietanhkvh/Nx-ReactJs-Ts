// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState, FunctionComponent } from 'react';
import styles from './app.module.scss';
import {Todos} from '@myorg/ui';
import {Todo} from '@myorg/data'

interface AppProps{
 pro?:string
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
  
  const handleAddTodo=()=>{
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }
  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos}/>
      <button id={'add-todo'} onClick={handleAddTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
