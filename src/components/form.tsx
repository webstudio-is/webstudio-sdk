import React from "react";
import { forwardRef, type HTMLProps } from "react";

export const Form = forwardRef<HTMLFormElement, HTMLProps<HTMLFormElement>>(
  (props, ref) => <form {...props} ref={ref} />
);

Form.displayName = "Form";
