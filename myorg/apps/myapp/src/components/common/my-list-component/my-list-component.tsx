import styles from './my-list-component.module.scss';
import MyComponent, { task } from '../my-component/my-component';
export interface MyListComponentProps {
  loading: boolean;
  tasks: task[];
  onArchiveTask?: (val?: string) => void;
  onPinTask?: (val?: string) => void;
}

export function MyListComponent(props: MyListComponentProps) {
  const { loading, tasks, onArchiveTask, onPinTask } = props;
  const events = {
    onPinTask,
    onArchiveTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  const defaulComp = (loading: boolean, tasks: task[]) => {
    if (loading) {
      return (
        <div className="list-items" data-testid="loading" key={'loading'}>
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
        </div>
      );
    }
    if (tasks.length === 0) {
      return (
        <div className="list-items" key={'empty'} data-testid="empty">
          <div className="wrapper-message">
            <span className="icon-check" />
            <div className="title-message">You have no tasks</div>
            <div className="subtitle-message">Sit back and relax</div>
          </div>
        </div>
      );
    }
    const tasksInOrder = [
      ...tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    return (
      <div className="list-items">
        {tasksInOrder.map((task) => (
          <MyComponent key={task.id} task={task} {...events} />
        ))}
      </div>
    );
  };
  return defaulComp(loading, tasks);
}

export default MyListComponent;
