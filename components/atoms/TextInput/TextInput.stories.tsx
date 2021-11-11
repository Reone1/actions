import React from "react";
import { Story, Meta } from "@storybook/react";
import TextInput, { TextProps } from "./TextInput";

export default {
  title: "Design system/Input/Text",
  component: TextInput,
  table: {
    defaultValue: {
      disable: true,
    },
  },
  argTypes: {
    type: {
      options: ["text", "password", "tel", "email", "url"],
      defaultValue: "text",
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "info", "success"],
      defaultValue: "primary",
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "Label",
    },
    value: {
      table: {
        disable: true,
      },
    },
    submitHandler: {
      defaultValue: null,
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    rest: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const TextInputTemplate: Story<TextProps> = (args) => <TextInput {...args} />;

export const Init = TextInputTemplate.bind({});

export const Primary = TextInputTemplate.bind({});
Primary.args = {
  label: "Primary",
};

export const Secondary = TextInputTemplate.bind({});
Secondary.args = {
  label: "Secondary",
  color: "secondary",
};

export const info = TextInputTemplate.bind({});
info.args = {
  label: "info",
  color: "info",
};
export const success = TextInputTemplate.bind({});

success.args = {
  label: "success",
  color: "success",
};
