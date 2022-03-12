import { forwardRef, type HTMLProps } from "react";

export const Component = forwardRef<
  HTMLFormElement,
  HTMLProps<HTMLFormElement>
>((props, ref) => <form {...props} ref={ref} />);

Component.displayName = "Form";
