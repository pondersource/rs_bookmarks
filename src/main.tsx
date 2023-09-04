import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppProviders from "./components/AppProviders.tsx";
import "./index.css";
import { remoteStorage, widget } from "./utils/remoteStorage.ts";



widget.attach('rsWidget');
remoteStorage.access.claim('*', 'rw');


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
