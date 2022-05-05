import Button from '../components/button/button'
import React from 'react';

export default {
    component: Button,
    title: 'Component/Button',
    argTypes:{
      handleAddTodo:{action:"handleAddTodo"}
    }
  };

  const Template = (args:any) => <Button {...args}/>;

  export const Primary:any = Template.bind({});


  