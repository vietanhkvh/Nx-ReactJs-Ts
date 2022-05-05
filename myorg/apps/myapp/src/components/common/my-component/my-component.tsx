import styles from './my-component.module.scss';

export interface task {
  id: string;
  title: string;
  state: string;
}
interface MyComponentProps {
  task?: task;
  onArchiveTask?: (val?: string) => void;
  onPinTask?: (val?: string) => void;
}

export function MyComponent(props: MyComponentProps) {
  const { task, onArchiveTask, onPinTask } = props;
  return (
    <div className={`list-item ${task?.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task?.state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask && onArchiveTask(task?.id)}
          id={`archiveTask-${task?.id}`}
          aria-label={`archiveTask-${task?.id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task?.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task?.state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask && onPinTask(task?.id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${task?.id}`}
              aria-label={`pinTask-${task?.id}`}
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default MyComponent;
