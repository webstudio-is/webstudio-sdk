import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "h1";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <h1 {...props} ref={ref} />);

Component.displayName = "Heading";
