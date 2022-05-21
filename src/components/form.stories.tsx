import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form as FormPrimitive } from "./form";

export default {
  title: "Components/Form",
  component: FormPrimitive,
  argTypes: {},
} as ComponentMeta<typeof FormPrimitive>;

const Template: ComponentStory<typeof FormPrimitive> = (args) => (
  <FormPrimitive {...args} />
);

export const Form = Template.bind({});
Form.args = {};
