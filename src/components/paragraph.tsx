import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "p";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <p {...props} ref={ref} />);

Component.displayName = "Paragraph";
