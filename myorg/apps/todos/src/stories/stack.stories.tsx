import Stack, { StackProps } from '../components/stack/stack';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Component/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 4,
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({
  numberOfChildren,
  ...args
}) => {
  const arr=new Array<any>();
  for(let i=0;i<numberOfChildren!;i++){
    arr.push(i);
  }
  return (
    <Stack {...args}>
      {arr.map((a, i) => (
        <div
          key={i}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border:'solid 1px',
            margin:5
          }}
        >
          {i}
        </div>
      ))}
    </Stack>
  );
};

export const Primary = Template.bind({});
