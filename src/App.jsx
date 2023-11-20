import React from 'react';
import {Routes,Route} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produk from "./pages/Notifikasi";
import FaqPage from './pages/Keranjang';
import './App.css';


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Produk' Component={Produk}/>
        <Route path='/faq' Component={FaqPage}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;