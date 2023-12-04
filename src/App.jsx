import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import HomeLogin from "./pages/HomeLogin";
import Notifikasi from "./pages/Notifikasi";
import Autentikasi from "./pages/Autentikasi";
import "./App.css";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import KatalogMakanan from "./pages/KatalogMakanan";
import KatalogElektronik from "./pages/KatalogElektronik";
import KatalogPakaian from "./pages/KatalogPakaian";
import KatalogKosmetik from "./pages/KatalogKosmetik";
import DetailProduk from "./pages/DetailProduk";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import BelumDibayar from "./pages/BelumDibayar";
import ModalKeluar from "./components/ModalKeluar";

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
        <Route path="/KatalogMakanan" Component={KatalogMakanan} />
        <Route path="/KatalogElektronik" Component={KatalogElektronik} />
        <Route path="/KatalogPakaian" Component={KatalogPakaian} />
        <Route path="/KatalogKosmetik" Component={KatalogKosmetik} />
        <Route path="/DetailProduk" Component={DetailProduk} />
        <Route path="/KebijakanPrivasi" Component={KebijakanPrivasi} />
        <Route path="/SyaratKetentuan" Component={SyaratKetentuan} />
        <Route path="/BelumDibayar" Component={BelumDibayar} />
        <Route path="/ModalKeluar" Component={ModalKeluar} />
      </Routes>


    </div>
  );
}

export default App;
