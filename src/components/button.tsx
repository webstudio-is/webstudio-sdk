import React, { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "button";

export const Button = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <button {...props} ref={ref} />);

Button.displayName = "Button";
