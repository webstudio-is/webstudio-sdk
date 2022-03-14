import React, { forwardRef, type HTMLProps } from "react";

export const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => <input {...props} ref={ref} />
);

Input.displayName = "Input";
