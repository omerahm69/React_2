
import { LanguageProvider } from "@/i18n/LanguageContext";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import "./index.css";


/*createRoot(document.getElementById("root")!).render(<App />);*/
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

/*
import React from "react";
import ReactDOM from "react-dom/client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);*/
