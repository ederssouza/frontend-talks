import { createBrowserRouter } from "react-router";
import App from "./App";
import { S, O, L, I, D } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: S },
      { path: "/s", Component: S },
      { path: "/o", Component: O },
      { path: "/l", Component: L },
      { path: "/i", Component: I },
      { path: "/d", Component: D },
    ],
  },
]);
