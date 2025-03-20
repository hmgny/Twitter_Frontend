import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Router>
      <App />
    </Router>
  </BrowserRouter>
);
