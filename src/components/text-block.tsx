import React from "react";
import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "div";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <div {...props} ref={ref} />);

Component.displayName = "TextBlock";
