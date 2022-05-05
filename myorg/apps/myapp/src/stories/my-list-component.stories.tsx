import MyListComponent from '../components/common/my-list-component/my-list-component';
import React from 'react';
import * as MyComponentStories from './my-component.stories';
export default {
  component: MyListComponent,
  title: 'MyListComponent',
  decorators: [
    (story: () => any) => <div style={{ padding: '3rem' }}>{story()}</div>,
  ],
};

const Template = (args: any) => <MyListComponent {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    { ...MyComponentStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...MyComponentStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...MyComponentStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...MyComponentStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...MyComponentStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...MyComponentStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks: any = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading: any = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty: any = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
