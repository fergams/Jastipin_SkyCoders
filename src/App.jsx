import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Produk from "./pages/Notifikasi";
import FaqPage from "./pages/Keranjang";
import Autentikasi from "./pages/Autentikasi";
import "./App.css";

function App() {
  return (
    <div>


      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Autentikasi" Component={Autentikasi} />
        <Route path="/Produk" Component={Produk} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>


    </div>
  );
}

export default App;
