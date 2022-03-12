import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet as DefaultOutlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { CriticalCss } from "../remix/critical-css";

export const Document = ({ Outlet = DefaultOutlet } = {}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <CriticalCss />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};
