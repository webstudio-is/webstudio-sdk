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
    type: {
      defaultValue: "submit",
      control: "radio",
      options: ["submit", "reset", "button"],
      description: [
        "A string indicating the behavior of the button. This is an enumerated attribute with the following possible values:",
        "submit: The button submits the form. This is the default value if the attribute is not specified, or if it is dynamically changed to an empty or invalid value.",
        "reset: The button resets the form.",
        "button: The button does nothing.",
      ].join("\n"),
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
