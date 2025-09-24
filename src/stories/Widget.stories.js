import React from 'react';
import Widget from '../components/Widget/Widget';
import '../styles.scss';

export default {
  title: 'Components/Widget', // Category and name in Storybook UI
  component: Widget,
  tags: ['autodocs'], // Generates documentation automatically
  argTypes: {
    message: { control: 'text' }, // Allows editing the 'message' prop in Storybook
  },
};

export const Default = {
  args: {
    message: 'Hello World!',
  },
};

export const CustomMessage = {
  args: {
    message: 'Welcome to Storybook!',
  },
};