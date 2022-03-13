import React from "react";
import { forwardRef, type HTMLProps } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  HTMLProps<HTMLButtonElement>
>((props, ref) => <button {...props} type="submit" ref={ref} />);

Button.displayName = "Button";
