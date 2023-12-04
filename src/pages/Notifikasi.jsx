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
      <Row>
      <div class="ui middle aligned divided list">
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
    <div class="content">
      <a class="header">Daniel Louise</a>
    </div>
  </div>
  
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"/>
    <div class="content">
      <a class="header">Stevie Feliciano</a>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/elliot.jpg"/>
    <div class="content">
      <a class="header">Elliot Fu</a>
    </div>
  </div>
</div></Row>
    </Container>
    
    <Footer className="text-detail"/>
    </div>
  )
}

export default Notifikasi