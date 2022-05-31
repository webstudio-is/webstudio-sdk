import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { propsToArgTypes } from "../arg-types/utils";
import { Button } from "./button";
import props from "!!../arg-types/loader!./button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: propsToArgTypes(props),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Example = Template.bind({});

Example.args = {
  children: "A Button"
};
