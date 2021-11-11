import React from "react";
import { Story, Meta } from "@storybook/react";
import LoginForm from "./LoginForm";

export default {
  title: "Pages/LoginForm",
  component: LoginForm,
} as Meta;

const Template: Story = (args) => <LoginForm {...args} />;

export const InitState = Template.bind({});

InitState.parameters = {};
