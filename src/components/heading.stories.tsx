import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading as HeadingPrimitive } from "./heading";

export default {
  title: "Components/Heading",
  component: HeadingPrimitive,
  argTypes: {},
} as ComponentMeta<typeof HeadingPrimitive>;

const Template: ComponentStory<typeof HeadingPrimitive> = (args) => (
  <HeadingPrimitive {...args} />
);

export const Heading = Template.bind({});
Heading.args = {
  children: "Heading",
};
