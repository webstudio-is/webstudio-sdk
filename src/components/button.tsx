import React, { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "button";

export type ButtonProps = ComponentProps<typeof defaultTag>

export const Button = forwardRef<
  ElementRef<typeof defaultTag>,
    ButtonProps
>((props, ref) => <button style={{border:"none"}} {...props} ref={ref} />);

Button.defaultProps = {
    type: "button", // otherwise it will be submit
}
Button.displayName = "Button";
