import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Nav";
import MakeOrder from "./MakeOrder";
import PrintInvoice from "./PrintInvoice";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/MakeOrder" element={<MakeOrder />} />
      <Route path="/PrintInvoice" element={<PrintInvoice />} />
    </Routes>
  </Router>
);

reportWebVitals();
