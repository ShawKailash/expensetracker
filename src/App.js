import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import AddBalance from "./components/addbalance";
import UseBalance from "./components/usebalance";
import Transactions from "./components/transactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/home" element={<Home />} />
        <Route path="/login/home/addbalance" element={<AddBalance />} />
        <Route path="/login/home/usebalance" element={<UseBalance />} />
        <Route path="/login/home/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
