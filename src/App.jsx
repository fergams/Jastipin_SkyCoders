import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import HomeLogin from "./pages/HomeLogin";
import Notifikasi from "./pages/Notifikasi";
import Autentikasi from "./pages/Autentikasi";
import "./App.css";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

function App() {
  return (
    <div>


      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Autentikasi" Component={Autentikasi} />
        <Route path="/HomeLogin" Component={HomeLogin} />
        <Route path="/Notifikasi" Component={Notifikasi} />
        <Route path="/Signin" Component={Signin} />
        <Route path="/Login" Component={Login} />
      </Routes>


    </div>
  );
}

export default App;
