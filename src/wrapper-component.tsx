import { useMemo, Fragment } from "react";
import type { OnChangeChildren } from "~/create-elements-tree";
import { type Instance } from "~/instance";
import * as components from "~/components";
import { useUserProps } from "~/user-props/use-user-props";
import { type CSS, css as createCss } from "~/stitches";

const renderText = (text: string): Array<JSX.Element> => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
};

const renderChildren = (
  children: Array<JSX.Element | string> | undefined
): Array<JSX.Element | string | Array<JSX.Element | string>> | undefined => {
  // Some elements like input can't have children
  if (children === undefined || children.length === 0) return;
  return children.map((child) => {
    return typeof child === "string" ? renderText(child) : child;
  });
};

export type WrapperComponentProps = {
  id: Instance["id"];
  component: Instance["component"];
  css: CSS;
  children: Array<JSX.Element | string>;
  onChangeChildren?: OnChangeChildren;
};

export const WrapperComponent = ({
  component,
  css,
  onChangeChildren, // prevent it from passing to primitives
  children,
  id,
  ...rest
}: WrapperComponentProps) => {
  const className = useMemo(() => createCss(css)(), [css]);
  const { Component } = components[component];
  const userProps = useUserProps(id);
  return (
    <Component {...userProps} {...rest} id={id} className={className}>
      {renderChildren(children)}
    </Component>
  );
};
