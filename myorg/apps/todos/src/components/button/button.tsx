import styles from './button.module.scss';

/* eslint-disable-next-line */
interface ButtonProps {
  handleAddTodo?: () => void;
}

export function Button(props: ButtonProps) {
  const { handleAddTodo } = props;
  return (
    <button id={'add-todo'} onClick={handleAddTodo}>
      Add Todo
    </button>
  );
}

export default Button;
