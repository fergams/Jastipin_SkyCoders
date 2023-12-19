import React from 'react'
import {Container, Row, Col, Tab, Tabs, Nav, Form} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin";  
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import ModalKeluar from "../components/ModalKeluar"
import { useNavigate } from "react-router-dom";

const RatingUlasan = () => {
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
                <Col className='judul rounded'> <Icon name='arrow circle left'/>
                Nilai Produk
                </Col>
            </Row>
            <Row className='tab-div-rating mt-3'>
                <Col >
                <div class="ui items">
                <div class="item">
                 <div class="ui small image mt-4 ms-3">
                    <img src="./src/assets/img/Produk/Produk-1.jpg"/>
                 </div>
                <div class="content mt-4">
                    <div class="header">Makaroni Bakar</div>
                <div class="meta">
                    <span class="price">Variant black</span>
                </div>
                <div class="description">
                    <p>Rp 100.000</p>
                </div>
                </div></div></div>
                </Col>
                <Col>
                <div className='star-ratin me-3 mt-3'>
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' /></div>
                </Col>
                <Row>
                <Form.Group className="mb-3 ms-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} placeholder='Beritahu pengguna lain mengapa Anda sangat menyukai produk ini.....'/>
      </Form.Group>
                </Row>
                <Row>
                <label class="custum-file-upload ms-4" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload File</span>
   </div>
   <input type="file" id="file"/>
</label>
<label class="custum-file-upload ms-4" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload File</span>
   </div>
   <input type="file" id="file"/>
</label>
<label class="custum-file-upload ms-4" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload File</span>
   </div>
   <input type="file" id="file"/>
</label></Row>
            <Row>
                <Col>
                <Button primary floated='right' className='btn-rating ' onClick={() => navigate("/BeriUlasan")} style={{cursor:'pointer'}}>Kirim</Button>
                </Col>
            </Row>
            </Row>
            <Row>
                <Col className='judul rounded'> <Icon name='arrow circle left'/>
                Nilai Toko
                </Col>
            </Row>
            <Row className='tab-div mt-3'>
                <Col >
                <div class="ui items">
                <div class="item">
                 <div class="ui small image mt-4 ms-3">
                    <img src="./src/assets/img/Produk/Produk-1.jpg"/>
                 </div>
                <div class="content mt-4">
                    <div class="header">Makaroni Bakar</div>
                <div class="meta">
                    <span class="price"><Icon name='map marker' className='' />Variant black</span>
                </div>
                <div class="description">
                </div>
                </div></div></div>
                </Col>
                <Col>
                <div className='star-ratin me-3 mt-3'>
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' />
                <Icon name='star' className='big' /></div>
                </Col>
                <Row>
                <Form.Group className="mb-3 ms-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} placeholder='Beritahu pengguna lain mengapa Anda sangat menyukai toko ini.....'/>
      </Form.Group>
                </Row>
            <Row>
                <Col>
                <Button primary floated='right' className='btn-rating ' onClick={() => navigate("/BeriUlasan")} style={{cursor:'pointer'}}>Kirim</Button>
                </Col>
            </Row>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default RatingUlasan