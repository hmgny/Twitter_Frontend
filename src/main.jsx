import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { TwitterContextProvider } from "./contextApi.jsx/TwitterContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <TwitterContextProvider>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </TwitterContextProvider>
);
