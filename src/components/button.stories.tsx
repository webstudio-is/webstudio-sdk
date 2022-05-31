import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./button";
import argTypes from "./button.props.json"

export default {
  title: "Components/Button",
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Example = Template.bind({});

Example.args = {
  children: "Test"
};
