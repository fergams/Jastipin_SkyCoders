import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";  
import {FaCartPlus} from "react-icons/fa"      
import { useNavigate } from "react-router-dom";                                                                                                                                                                            

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='homepage'>
      <NavbarComponent/>
      <header className="w-90 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box align-center mt-4"><h3>Selamat Datang di Website</h3>
          </Row>
          <Row className="header-box align-center fw-bold mb-4"><h5> Jastip.in</h5></Row>
          <div></div>
          <Row className="header-box align-center fw-bold mt-4"><h6> Website jasa titip produk dan barang baik dari berbagai daerah </h6></Row>
          <Row className="header-box align-center fw-bold"><h6> di Indonesia maupun dari luar negeri</h6></Row>
        </Container>
      </header>
      <div className='fitur '></div>
      <div className='produk '>
        <Container>
      <Row>
      <h1 className="text-left fw-bold">Kategori Produk</h1>
      <div class="card mt-4 mb-5 ">
        <div class="card-img" onClick={() => navigate("/KatalogMakanan")}></div>
          <div class="card-info">
            <div class="card-text">
              <p class="text-title">Makanan</p>
           </div>
            <div class="card-icon">
            <svg viewBox="0 0 28 25" class="icon">
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="card mt-4 mb-5 ">
        <div class="card-img"></div>
          <div class="card-info">
            <div class="card-text">
              <p class="text-title">Elektronik</p>
           </div>
            <div class="card-icon">
            <svg viewBox="0 0 28 25" class="icon">
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="card mt-4 mb-5 ">
        <div class="card-img"></div>
          <div class="card-info">
            <div class="card-text">
              <p class="text-title">Pakaian</p>
           </div>
            <div class="card-icon">
            <svg viewBox="0 0 28 25" class="icon">
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="card mt-4 mb-5 ">
        <div class="card-img"></div>
          <div class="card-info">
            <div class="card-text">
              <p class="text-title">Kosmetik</p>
           </div>
            <div class="card-icon">
            <svg viewBox="0 0 28 25" class="icon">
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </div>
        </div>
      </div>
      </Row>
      <Row>
        <h1 className="text-left fw-bold">Kategori Produk</h1></Row>
      <Row>
        {ProdukTerbaru.map((Produk) => {
          return <Col key={Produk.id} className='rounded'>
            <img src={Produk.image} alt="unspalsh.com" className=' rounded shadow mt-3'/>
            <h3 className='fw-bold'>Nama Produk</h3>
            <p>Produk ini adalah produk asli indonesia</p>
            <Row><Col>
            <h3 className='fw-bold'><FaCartPlus className='ikoncart-p fa-xl me-2'/>Rp 10.000</h3>
            </Col>
            </Row>
            
          </Col>
        })}
      </Row>
        </Container>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home