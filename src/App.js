import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home.components";
import Product from "./pages/product/product.components";
import Developer from "./pages/developer/developer.component";
import Company from "./pages/company/company.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/developers">
          <Route path=":developerId" element={<Developer />} />
        </Route>
        <Route path="/company">
          <Route path=":companyId" element={<Company />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
