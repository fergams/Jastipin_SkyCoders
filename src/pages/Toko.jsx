import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import {ProdukTerbaru} from "../data/index";
import {FaCartPlus} from "react-icons/fa"   
import '../Style/Profil.css'
import { useNavigate } from "react-router-dom";   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faUser, faStickyNote, faShoppingCart, faShop, faSignOut, faComments } from '@fortawesome/free-solid-svg-icons';

const Toko = () => {
    let navigate = useNavigate();
  return (
    
    <Container>
    <Row>
      <Col>
      <Item.Group divided className='mt-5'>
    <Item>
      <Item.Image src='./src/assets/img/Produk/Produk-4.jpg' size='small mt-5' className='rounded-20' />

      <Item.Content className='mt-5'>
        <h1 className='detailproduk fw-bold'>Croissant Arab Saudi</h1>
        <p  onClick={() => navigate("/UlasanProduk")} style={{cursor:'pointer'}}>
        <Rating maxRating={5} /> 4.5  | <b>21</b> ulasan produk</p>
        <hr />
      </Item.Content>
    </Item>
  </Item.Group>
      </Col>
    </Row>
  </Container >
  )
}

export default Toko