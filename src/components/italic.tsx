import React from "react";
import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "i";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <i {...props} ref={ref} />);

Component.displayName = "Italic";
