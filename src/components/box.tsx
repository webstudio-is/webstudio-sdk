import React, { forwardRef, type HTMLProps } from "react";

export const Box = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => <div {...props} ref={ref} />
);

Box.displayName = "Box";
