import React, { forwardRef, type HTMLProps } from "react";

export const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ children: _children, ...props }, ref) => <input {...props} ref={ref} />
);

Input.displayName = "Input";
