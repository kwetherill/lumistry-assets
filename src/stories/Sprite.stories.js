import React from 'react';
import Sprite from '../components/Sprite/Sprite';

export default {
  title: 'Components/Sprite', // Category and name in Storybook UI
  component: Sprite,
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