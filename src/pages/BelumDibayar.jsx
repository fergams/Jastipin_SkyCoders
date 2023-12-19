import React from 'react'
import {Container, Row, Col, Tab, Tabs, Nav, Card} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import ModalKeluar from "../components/ModalKeluar"
import { useNavigate } from "react-router-dom";   
import produk from "../assets/img/produk/im.png";
import "../Style/Cardout.css";

const BelumDibayar = () => {
  let navigate = useNavigate();
  return (
    <div className='homepage'>
    <NavbarComponentLogin/>
    <header className="khat d-flex align-items-center">
    <Container>
      <Row className="header-box align-center mt-4"></Row>
      <Row className="header-box align-center fw-bold mb-4 color-blue"><h5> Jastip.in</h5></Row>
      <div></div>
      <div></div>
    </Container>
    </header>
        <Container>
            <Row>
                <Col xs={6} md={4} className='mt-5'>
                <div><img class="foto-avatar float-left" src="../src/assets/img/Testimonial/people-1.jpg"/>
                </div><div>
                     <h2 className='foto-h3'><b>Angel Safitri</b></h2>
                     <a href="/Profil" className='foto-a'><Icon name='pencil' className='' />Ubah Profil</a>
                </div>
                </Col>
                <Col xs={12} md={8}className='judul rounded'> <Icon name='arrow circle left'/>
                Status Pesanan Saya
                </Col>
            </Row>
            <Row>
            <Col xs={6} md={4} >
                <Nav defaultActiveKey="/BelumDibayar" className="flex-column mt-5">
                <Nav.Link href="/Profil"><Icon name='user' className='' />Profil Saya</Nav.Link>
                <Nav.Link href="/BelumDibayar"><Icon name='cart' className='' />Pesanan</Nav.Link>
                <Nav.Link href="/Obrolan"><Icon name='chat' className='' />Obrolan</Nav.Link>
                <Nav.Link href="/berjualan"><Icon name='money' className='' />Mulai Berjualan</Nav.Link>
                <Nav.Link><ModalKeluar/></Nav.Link>
                </Nav>
                </Col>
                <Col xs={12} md={8}>
                <Nav className='tab'justify defaultActiveKey="/home">
                    <Nav.Item>
                     <Nav.Link href="/BelumDibayar" >Belum Dibayar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/Dikirim">Dikirim</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/Selesai">Selesai</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/BeriUlasan">Beri Ulasan</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='tab-div mt-3 '>
                  <Row>
                    <h2 className='tab-toko mt-2'>Berkah.Jastip</h2>
                  </Row>
                  <Row>
                  <Col md={2} className='mt-4 ms-4'>
            {/* Gambar */}
            <Card.Img variant="top" src={produk} alt="Gambar Barang" />
          </Col>
          <Col md={8} className='mt-4'>
            {/* Nama Barang */}
            <Card.Title className="nama-barang" style={{fontSize:"18px"}} >Croissant Arab Saudi</Card.Title>
            {/* Variant Barang */}
            <Card.Subtitle className="mb-2 text-muted font-weight-bold">Creamy Chocolate</Card.Subtitle>
            {/* Harga Barang */}
            <Card.Text className="harga-barang" style={{fontSize:"18px"}} >Rp 15.000</Card.Text>
          </Col>
          <Col className=' align-text-bottom mt-4 '><p>5x</p></Col>
          <Col md={2} className='mt-4 ms-4'>
            {/* Gambar */}
            <Card.Img variant="top" src={produk} alt="Gambar Barang" />
          </Col>
          <Col md={8} className='mt-4'>
            {/* Nama Barang */}
            <Card.Title className="nama-barang" style={{fontSize:"18px"}} >Croissant Arab Saudi</Card.Title>
            {/* Variant Barang */}
            <Card.Subtitle className="mb-2 text-muted font-weight-bold">Creamy Cheese</Card.Subtitle>
            {/* Harga Barang */}
            <Card.Text className="harga-barang" style={{fontSize:"18px"}} >Rp 15.000</Card.Text>
          </Col>
          <Col className=' align-text-bottom mt-4 '><p>3x</p></Col>
                    <Row>
                      <Col>
                      <p className='ms-4 mt-4'>2 Produk</p>
                      </Col>
                      <Col>
                      <p className='anu me-3'>Rp120.000</p>
                      </Col>
                    </Row>
                      <Row>
                        <Col>
                        <Button primary floated='right' className='mt-5' onClick={() => navigate("/Pembayaran")} style={{cursor:'pointer'}}>
            Bayar Sekarang
          </Button></Col>
                      </Row>
                  </Row>
                </div>
                </Col>
            </Row>
            <Row>
            <Col xs={6} md={4} >

            </Col>
            <Col xs={12} md={8} >
                
            </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default BelumDibayar