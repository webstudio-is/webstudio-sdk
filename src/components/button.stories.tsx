import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as ButtonPrimitive } from "./button";
import { globalArgTypes } from "../arg-types";

export default {
  title: "Components/Button",
  component: ButtonPrimitive,
  argTypes: {
    children: {
      control: "text",
    },
    ...globalArgTypes,
  },
} as ComponentMeta<typeof ButtonPrimitive>;

const Template: ComponentStory<typeof ButtonPrimitive> = (args) => (
  <ButtonPrimitive {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: "Button",
};
