import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as ButtonPrimitive } from "./button";

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
    accessKey: {
      description:
        "A string indicating the single-character keyboard key to give access to the button.",
      control: "text",
    },
    autofocus: {
      defaultValue: false,
      description:
        "A boolean value indicating whether or not the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.",
      control: "boolean",
    },
    disabled: {
      defaultValue: false,
      description:
        "A boolean value indicating whether or not the control is disabled, meaning that it does not accept any clicks.",
      control: "boolean",
    },
    formAction: {
      description:
        "A string reflecting the URI of a resource that processes information submitted by the button. If specified, this attribute overrides the action attribute of the <form> element that owns this element.",
      control: "text",
    },
    formEnctype: {
      description:
        "A string reflecting the type of content that is used to submit the form to the server. If specified, this attribute overrides the enctype attribute of the <form> element that owns this element.",
      defaultValue: "application/x-www-form-urlencoded",
      control: "select",
      options: [
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ],
    },
    formMethod: {
      description:
        "A string reflecting the HTTP method that the browser uses to submit the form. If specified, this attribute overrides the method attribute of the <form> element that owns this element.",
      defaultValue: "get",
      control: "radio",
      options: ["post", "get", "dialog"],
    },
    formNoValidate: {
      description:
        "A boolean value indicating that the form is not to be validated when it is submitted. If specified, this attribute overrides the novalidate attribute of the <form> element that owns this element.",
      defaultValue: true,
      control: "boolean",
    },
    formTarget: {
      description: [
        "A string reflecting a name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the target attribute of the <form> element that owns this element.",
        "Indicates where to display the response after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a browsing context (for example, tab, window, or iframe). The following keywords have special meanings:",
        "_self (default): Load into the same browsing context as the current one.",
        "_blank: Load into a new unnamed browsing context.",
        "_parent: Load into the parent browsing context of the current one. If no parent, behaves the same as _self.",
        "_top: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as _self.",
      ].join("\n"),
      defaultValue: "_self",
      control: "text",
    },
    name: {
      description:
        "A string representing the name of the object when submitted with a form. If specified, it must not be the empty string.",
      control: "text",
    },
    tabIndex: {
      description:
        "A long that represents this element's position in the tabbing order.",
      control: "number",
    },
    value: {
      description:
        "A string representing the current form control value of the button.",
      control: "text",
    },
  },
} as ComponentMeta<typeof ButtonPrimitive>;

const Template: ComponentStory<typeof ButtonPrimitive> = (args) => (
  <ButtonPrimitive {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: "Button",
};
