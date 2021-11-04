import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextInput, { TextInputProps } from './index';

export default {
  title: 'Design system/Input/TextInput',
  component: TextInput,
  table: {
    defaultValue: {
      disable: true,
    },
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'tel', 'email', 'url'],
      defaultValue: 'text',
      control: { type: 'select' },
    },
    label: {
      type: 'string',
      defaultValue: 'Label',
    },
    error: {
      type: 'string',
    },
    variant: {
      type: 'string',
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
  },
} as Meta;

const TextInputTemplate: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const PrimaryOutlined = TextInputTemplate.bind({});
PrimaryOutlined.args = {
  label: 'Primary',
};
export const PrimaryFilled = TextInputTemplate.bind({});
PrimaryFilled.args = {
  label: 'Primary',
  variant: 'filled',
};
export const PrimaryStandard = TextInputTemplate.bind({});
PrimaryStandard.args = {
  label: 'Primary',
  variant: 'standard',
};

export const Error = TextInputTemplate.bind({});
Error.args = {
  label: 'Error',
  error: 'Input Text error',
};
