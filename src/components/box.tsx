import { forwardRef, type HTMLProps } from "react";

export const Component = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => <div {...props} ref={ref} />
);

Component.displayName = "Box";
