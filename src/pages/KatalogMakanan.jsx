import React from 'react'
import {Container, Row, Col} from "react-bootstrap";       
import {ProdukTerbaru} from "../data/index";
import Footer from "../components/Footer";
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import {FaCartPlus} from "react-icons/fa" 
import Dropdown from '../components/Dropdownw';

const KatalogMakanan = () => {
  return (<div className='homepage'>
  <NavbarComponentLogin/>
  <header className="hkat d-flex align-items-center rounded">
    <Container>
      <Row className="header-box align-center mt-4"></Row>
      <Row className="header-box align-center fw-bold mb-4"><h5> Jastip.in</h5></Row>
      <div></div>
      <Row className="header-box align-center fw-bold mt-4"><h6> Kategori Produk</h6></Row>
      <Dropdown />
    </Container>
  </header>
  <div className='fitur mr-5'></div>
  
    <Container>
  <Row>
    {ProdukTerbaru.map((Produk) => {
      return <Col key={Produk.id} className='rounded'>
        <img src={Produk.image} alt="unspalsh.com" className='mb-2 rounded shadow mt-3'/>
        <h5 className='fw-bold'>Nama Produk</h5>
        <p>Produk ini adalah produk asli indonesia</p>
        <Row>
          <Col><FaCartPlus className='ikoncart fa-2xl' />
          </Col>
          <Col >
        <h5 className='fw-bold'>Rp 10.000</h5>
          </Col>
        </Row>
        
      </Col>
    })}
  </Row>
    </Container>
  
  <Footer/>
</div>
  )
}

export default KatalogMakanan