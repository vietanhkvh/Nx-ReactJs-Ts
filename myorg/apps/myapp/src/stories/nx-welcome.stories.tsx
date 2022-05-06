import { Story, Meta } from '@storybook/react';
import { NxWelcome } from '../app/nx-welcome';

export default {
  component: NxWelcome,
  title: 'NxWelcome',
} as Meta;

const Template: Story = (args) => <NxWelcome title={'my-app'} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
