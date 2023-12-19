import React from 'react'
import {Container, Row, Col, Tab, Tabs, Nav} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import ModalKeluar from "../components/ModalKeluar"

const StatusPesanan = () => {
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
                <div className='tab-div-status mt-3 '>
                <Icon name='clipboard outline' className='massive ms-2' /><h3>Belum ada pesanan</h3>
                
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

export default StatusPesanan