import React from "react";
import { forwardRef, type HTMLProps } from "react";

export const Component = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>((props, ref) => <input {...props} ref={ref} />);

Component.displayName = "Input";
