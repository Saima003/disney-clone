import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ClerkProvider } from "@clerk/clerk-react";
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
