import React, { forwardRef, type ElementRef, type ComponentProps } from "react";

const defaultTag = "a";

export type LinkProps = Omit<ComponentProps<typeof defaultTag>, "href"> & {
    href: string;
}

export const Link = forwardRef<
  ElementRef<typeof defaultTag>,
    LinkProps
>((props, ref) => <a {...props} ref={ref} />);

Link.displayName = "Link";
