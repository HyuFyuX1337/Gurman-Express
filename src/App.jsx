import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [cartDatas, setCartDatas] = useState([]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home cartDatas={cartDatas} setCartDatas={setCartDatas} />}
        />
        <Route
          path="/korzina"
          element={<Cart cartDatas={cartDatas} setCartDatas={setCartDatas} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
