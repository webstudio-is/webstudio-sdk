import { useRef, useCallback, MutableRefObject } from "react";

export type Publish = <Type, Payload = undefined>(action: {
  type: Type;
  payload?: Payload;
}) => void;

type UsePublish = [Publish, MutableRefObject<HTMLIFrameElement | null>];

/**
 * To publish a postMessage event on the iframe and parent window from the parent window.
 */
export const usePublish = (): UsePublish => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const publish = useCallback(
    (action) => {
      const element = iframeRef.current;
      if (element?.contentWindow == null) return;
      element.contentWindow.postMessage(action, "*");
      window.postMessage(action, "*");
    },
    [iframeRef]
  );
  return [publish, iframeRef];
};

/**
 * To publish a postMessage event on the current window and parent window from the iframe.
 */
export const publish = <Type extends string, Payload = undefined>(action: {
  type: Type;
  payload?: Payload;
}) => {
  window.parent.postMessage(action, "*");
  window.postMessage(action, "*");
};
