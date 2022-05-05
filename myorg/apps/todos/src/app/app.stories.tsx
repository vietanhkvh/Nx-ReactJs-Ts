import { Story, Meta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { App } from './app';

export default {
  component: App,
  title: 'App',
  argTypes: {
    handleAddTodo: { action: true },
  },
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Added = Template.bind({});
Added.args = {};

Added.play = async({args, canvasElement})=>{
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('add-todo'));
  await waitFor(() => expect(args?.['handleAddTodo']).toHaveBeenCalled());
} 