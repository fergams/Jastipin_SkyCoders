import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'

const Notifikasi = () => {
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
        <Col className='judul rounded'> <Icon name='arrow circle left' className='' />Notifikasi</Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <div>
    <img class="avatar" src="../src/assets/img/Testimonial/people-1.jpg"/>
      <a class="fw-bold ms-3">berkah.jastip</a>
      </div>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>Barang Jastip sedang di perjalanan</p>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>hari ini 11:42</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
      <div>
    <img class="avatar" src="../src/assets/img/Testimonial/people-1.jpg"/>
      <a class="fw-bold ms-3">jastipcirebon</a>
      </div>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>Barang Sudah diterima</p>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>kemarin 19.30</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
      <div>
    <img class="avatar" src="../src/assets/img/Testimonial/people-1.jpg"/>
      <a class="fw-bold ms-3">Kuyjastip</a>
      </div>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>Barang Sudah diterima</p>
        </Col>
        <Col>
        <p className='p-notif mt-2 mb-3'>kemarin 19.30</p>
        </Col>
      </Row>
      <hr />
    </Container>
    
    <Footer className="text-detail"/>
    </div>
  )
}

export default Notifikasi
