import React from "react";
import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "b";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <b {...props} ref={ref} />);

Component.displayName = "Bold";
