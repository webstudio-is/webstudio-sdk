import { useEffect } from "react";

// @todo this is going to be highly inefficient, because we will
// add and remove event listener gazillion of times.
export const useSubscribe = <Type, Payload = undefined>(
  type: Type,
  onAction: (payload: Payload) => void
) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === type) {
        onAction(event.data.payload);
      }
    };
    window.addEventListener("message", handleMessage, false);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [type, onAction]);
};
