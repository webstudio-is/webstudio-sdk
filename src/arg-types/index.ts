export const globalArgTypes = {
  accessKey: {
    description: "Keyboard shortcut to activate or add focus to the element.",
    control: "text",
  },
  autofocus: {
    defaultValue: false,
    description:
      "The element should be automatically focused after the page loaded.",
    control: "boolean",
  },
  disabled: {
    defaultValue: false,
    description: "Indicates whether the user can interact with the element.",
    control: "boolean",
  },
  formAction: {
    description:
      "Indicates the action of the element, overriding the action defined in the <form>",
    control: "text",
  },
  formEncType: {
    description: `If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.`,
    defaultValue: "application/x-www-form-urlencoded",
    control: "select",
    options: [
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ],
  },
  formMethod: {
    description: `If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.`,
    defaultValue: "get",
    control: "radio",
    options: ["post", "get", "dialog"],
  },
  formNoValidate: {
    description: `If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.`,
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
      "A string representing the name of the element when submitted with a form. If specified, it must not be the empty string.",
    control: "text",
  },
  tabIndex: {
    defaultValue: 0,
    description:
      "Overrides the browser's default tab order and follows the one specified instead.",
    control: "number",
  },
  value: {
    description:
      "Defines a default value which will be displayed in the element on page load.",
    control: "text",
  },
};
