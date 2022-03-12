import { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "a";

export const Component = forwardRef<
  ElementRef<typeof defaultTag>,
  ComponentProps<typeof defaultTag>
>((props, ref) => <a {...props} href={props.href || ""} ref={ref} />);

Component.displayName = "Link";
