import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'

const Itemm = () => (
  
  <Container>
    <Row>
      <Col>
      <Item.Group divided className='mt-5'>
    <Item>
      <Item.Image src='./src/assets/img/Produk/Produk-2.jpg' size='large mt-5' className='rounded-20' />

      <Item.Content className='mt-5'>
        <h1 className='detailproduk fw-bold'>Nama Produk</h1>
        <p>
        <Rating maxRating={5} disabled /> 0.0  | <b>21</b> ulasan produk</p>
            <h2 className='fw-bold'>Rp 100.000</h2>
        <h4>Variant <Button.Group className='varian' buttons={['Variant1', 'Variant2', 'Variant3']} /></h4>
        <h4>Kuantitas
          <button className='quantity margin-left-3rem'>-</button>
          <input type="text" className='quantity-label' />
          <button className='quantity-r'>+</button>
        </h4>
        <Item.Extra>
          
        <button class="ui primary basic button">Tambahkan ke_
      <Icon name='cart' className='' /></button>
            
          <Button primary floated=''>
            Beli Sekarang
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
      </Col>
    </Row>
  </Container>
)

export default Itemm