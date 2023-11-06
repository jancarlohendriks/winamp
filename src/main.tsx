import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/store";
// Pages
import Home from "@/pages/Home.tsx";
import Library from "@/pages/Library.tsx";
// Components
import { Navigation } from "@/components/Navigation";
// Styles
import "@/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
