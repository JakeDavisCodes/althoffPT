import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </div>
);