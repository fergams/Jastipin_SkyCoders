import React from 'react'
import {Container, Row, Col, Tab, Tabs, Nav} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import ModalKeluar from "../components/ModalKeluar"
import { useNavigate } from "react-router-dom";   

const Pembayaran = () => {
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
                     <a href="" className='foto-a'><Icon name='pencil' className='' />Ubah Profil</a>
                </div>
                </Col>
                <Col xs={12} md={8}className='judul rounded'> <Icon name='arrow circle left'/>
                Pembayaran
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4} >
                <Nav defaultActiveKey="/home" className="flex-column mt-5">
                <Nav.Link href="/home"><Icon name='user' className='' />Profil Saya</Nav.Link>
                <Nav.Link eventKey="link-1"><Icon name='cart' className='' />Pesanan</Nav.Link>
                <Nav.Link eventKey="link-2"><Icon name='chat' className='' />Obrolan</Nav.Link>
                <Nav.Link eventKey="/berjualan"><Icon name='money' className='' />Mulai Berjualan</Nav.Link>
                <Nav.Link eventKey="/keluar"><ModalKeluar/></Nav.Link>
                </Nav>
                </Col>
                <Col xs={12} md={8}>
                <div className='tab-div mt-3 '>
                  <Row>
                    <Col>
                      <p className='ms-4 mt-3'><Icon name='money' className='' />Total Pembayaran</p>
                    <p className='ms-4'><Icon name='time' className='' />Bayar dalam</p>
                    </Col>
                    <Col>
                    <p className='p-bayar me-5 mt-3'><b>Rp 120.000</b></p>
                    <p className='p-bayar me-5 mb-5'>11 jam 60 menit 60 detik</p>
                    </Col>
                  </Row>
                  <Row>
                    <Row>
                  <div>
                    <img src="../src/assets/img/bri.png" alt="" className='img-p ms-5'/>
                    <span className='ms-3'>No. Rekening : <b className='ms-3'>123 1234 1234 1234</b><b className='aaa'>Salin</b></span>
                    </div>
                      <Col>
                      </Col>
                    </Row>
                      <Row>
                        <Col>
                    <p className='ms-4 mt-3'><Icon name='' className='aaa-btn' />Bukti Pembayaran
                    <Button outline floated='right' className=''>Unggah Foto</Button></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <Button primary floated='right' className='aaa-btn mt-5' onClick={() => navigate("/Dikirim")} style={{cursor:'pointer'}}>Selesai</Button></Col>
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

export default Pembayaran