import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppErrorBoundary from "./components/ui/AppErrorBoundary";

// React 19 hoists route metadata but does not replace static HTML fallbacks.
document.head.querySelectorAll('title, link[rel="canonical"], meta[name="description"], meta[name="keywords"], meta[name="robots"], meta[name="author"], meta[property^="og:"], meta[name^="twitter:"], script[type="application/ld+json"]').forEach(node => node.remove());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppErrorBoundary><App /></AppErrorBoundary>
  </React.StrictMode>
);
