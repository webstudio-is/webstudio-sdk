import { forwardRef, type HTMLProps } from "react";

export const Component = forwardRef<
  HTMLButtonElement,
  HTMLProps<HTMLButtonElement>
>((props, ref) => <button {...props} type="submit" ref={ref} />);

Component.displayName = "Button";
