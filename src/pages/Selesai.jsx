import React from 'react'
import {Container, Row, Col, Tab, Tabs, Nav} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import ModalKeluar from "../components/ModalKeluar"
import { useNavigate } from "react-router-dom";   

const Selesai = () => {
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
                     <h2 className='foto-h3'><b>Username</b></h2>
                     <a href="/Profil" className='foto-a'><Icon name='pencil' className='' />Ubah Profil</a>
                </div>
                </Col>
                <Col xs={12} md={8}className='judul rounded'> <Icon name='arrow circle left'/>
                Status Pesanan Saya
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4} >
                <Nav defaultActiveKey="/Dikirim" className="flex-column mt-5">
                <Nav.Link href="/Profil"><Icon name='user' className='' />Profil Saya</Nav.Link>
                <Nav.Link href="/Dikirim"><Icon name='cart' className='' />Pesanan</Nav.Link>
                <Nav.Link href="/Profil"><Icon name='chat' className='' />Obrolan</Nav.Link>
                <Nav.Link href="/berjualan"><Icon name='money' className='' />Mulai Berjualan</Nav.Link>
                <Nav.Link href="/Keluar"><ModalKeluar/></Nav.Link>
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
                    <Col>
                    <h2 class="ui header mt-3 ms-4 w-100">
                      <img  src="../src/assets/img/Produk/Produk-1.jpg"/>
                      <div class="content font-weight-normal">Kulkas
                      <div class="sub header">Variant: Black</div>
                      </div>
                    </h2>
                    </Col>
                    <Col>
                    <p className='float-right me-2 mb-5'>1x</p>
                    </Col>
                    <Row>
                      <Col>
                      <p className='ms-4'>1 Produk</p>
                      </Col>
                      <Col>
                      <p className='anu me-3'>Rp100.000</p>
                      </Col>
                    </Row>
                      <Row>
                        <Col>
                        <Button primary floated='right' className='mt-5' onClick={() => navigate("/BeriUlasan")} style={{cursor:'pointer'}}>
            Selesai
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

export default Selesai