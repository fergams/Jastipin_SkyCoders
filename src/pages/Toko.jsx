import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import {ProdukTerbaru} from "../data/index";
import {FaCartPlus} from "react-icons/fa"   
import '../Style/Profil.css'
import { useNavigate } from "react-router-dom";   
import grap from '../assets/img/grupp.png'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdownw';
import NavbarComponentLogin from '../components/NavbarComponentLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faUser, faStickyNote, faShoppingCart, faShop, faSignOut, faComments } from '@fortawesome/free-solid-svg-icons';

const Toko = () => {
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
      <Col>
      <Item.Group divided className='mt-5'>
    <Item>
      <Item.Image src='./img/toko.png' size='small mt-5' className='rounded-20' />
      <Item.Content className='mt-5'>
        <h1 className='detailproduk fw-bold'><b>berkah.jastip</b><button class="ui primary basic button ms-4" onClick={() => navigate("/Obrolan")}style={{ cursor: "pointer" }}><Icon name='plus' className='' />Ikuti
          </button></h1>
        <p  onClick={() => navigate("/UlasanProduk")} style={{cursor:'pointer'}}>
        <Rating maxRating={5} /> 4.5  | <b>3</b> Ulasan toko | <b>21</b> Produk Terjual | <b>29</b> Pengikut</p>
        <hr />
      </Item.Content>
    </Item>
  </Item.Group>
      </Col>
    </Row>
    <Row>
        <Col>
        <h3 className='mt-4'>Ulasan Toko</h3>
        <img src={grap} alt="" style={{ height:'170px', marginTop:'0%', marginLeft:'0%'}}/>
        <h3 className='mt-4'>Semua Produk</h3>
        </Col>
    </Row>
    <Row>
    <Col className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className=" katalog rounded shadow mt-3" />
                  <h3 className="fw-bold" >Chek Hup Coffee (Malaysia)</h3>
                  <p style={{ fontSize: '0.8rem' }} >Chek Hup Coffee merupakan minuman dari kopi panggang yang nikmat dan memiliki rasa yang khas.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold" >
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
                <Col className="rounded">
                  <img src="../img/Banana.jpg" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Banana Chips Rasa Matcha </h3>
                  <p style={{ fontSize: '0.8rem' }} >Keripik pisang dengan taburan matcha diatasnya dan kaya akan rasa</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 10.000
                      </h5>
                    </Col>
                  </Row>
                </Col>      

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/BlunderCokro.png"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Blunder Cokro Khas Madiun</h3>
                  <p style={{ fontSize: '0.8rem' }} >Produk roti legendaris dengan kelembutan dari roti bluder Cokro memiliki tempat spesial tersendiri di hati.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 20.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
  </Container >
  <Footer/>
    </div>
   
  )
}

export default Toko