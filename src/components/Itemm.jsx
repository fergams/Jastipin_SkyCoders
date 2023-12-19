import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'
import {ProdukTerbaru} from "../data/index";
import {FaCartPlus} from "react-icons/fa"   
import { useNavigate } from "react-router-dom";   

const Itemm = () => {
  let navigate = useNavigate();
  return (
  
      <Container>
        <Row>
          <Col>
          <Item.Group divided className='mt-5'>
        <Item>
          <Item.Image src='./src/assets/img/Produk/Produk-4.jpg' size='large mt-5' className='rounded-20' />

          <Item.Content className='mt-5'>
            <h1 className='detailproduk fw-bold'>Croissant Arab Saudi</h1>
            <p  onClick={() => navigate("/UlasanProduk")} style={{cursor:'pointer'}}>
            <Rating maxRating={5} /> 4.5  | <b>21</b> ulasan produk</p>
            <hr />
                <h2 className='fw-bold'>Rp 100.000</h2>
                
            <h4>Variant <Button.Group className='varian' buttons={['Creamy Chocolate', 'Creamy Cheese', 'Sweet Pandan']} /></h4>
            <h4>Kuantitas
              <button className='quantity margin-left-3rem'>-</button>
              <input type="text" className='quantity-label' />
              <button className='quantity-r'>+</button>
            </h4>
            <Item.Extra> 
            <button class="ui primary basic button" onClick={() => navigate("/Keranjang")}style={{ cursor: "pointer" }}>Tambahkan ke
          <Icon name='cart' className='ms-2' /></button>
                
              <Button primary floated='' className='ms-3' onClick={() => navigate("/Checkout")}style={{ cursor: "pointer" }}>
                Beli Sekarang
              </Button>
            </Item.Extra>
          <hr />
          <div class="ui items">
                    <div class="item">
                    <div class="ui small image mt-4 ms-3 rounded-5">
                        <img src="./src/assets/img/Produk/Produk-1.jpg"/>
                    </div>
                    <div class="content mt-4">
                        <div class="header">Toko Agus</div>
                    <div class="meta">
                        <span class="price"><Icon name='map marker' className='' />KOTA BATAM</span>
                    </div>
                    <div class="description">
                    </div>
                    </div></div></div>
                    <button class="ui primary basic button">Chat Sekarang
          <Icon name='chat' className='ms-2' /></button>
          <button class="ui primary basic button ms-3">Kunjungi Toko
          <Icon name='store' className='ms-2' /></button>
          </Item.Content>
        </Item>
          <Row>
          <Col className='judul rounded'> <Icon name='arrow circle left'/>
                    Spesifikasi Produk
                    </Col>
          </Row>
          <Row>
            <Col>
            <p className='mt-3'>Nama Produk                   : Croissant <br />
    Merek                                 : 7 Days<br />
    Negara Asal                     : Arab Saudi<br />
    Dikirim ke                          : Daerah Kota Batm<br />
    Status ketersedian         : Open Pre-Order<br />
    Periode Pre-Order          : Mulai Tanggal 10 - 27 November 2023<br />
    Stok                                    : 50 <br />
    Keterangan                      : Open Jastip Corissant Arab Saudi ke daerah sekitar kota Batam, estimasi produk sampai di tanggal 29 dan 30 November 2023. </p></Col>
          </Row>
          <Row>
          <Col className='judul rounded'> <Icon name='arrow circle left'/>
                    Deskripsi Produk
                    </Col>
          </Row>
          <Row>
            <Col>
            <p className='mt-3'>Croissant termasuk salah satu jenis flaky pastry yang memiliki tekstur berlapis-lapis. 7 Days Croissant bisa dijadikan pilihan yang tepat untuk camilan atau mengganjal perut. Terbuat dari bahan – bahan berkualitas, rasanya yang terbilang manis, gurih dan renyah, camilan sangat disukai oleh segala usia baik anak – anak dan dewasa. Nah, mungkin bagi Anda yang menginginkan camilan lezat dengan rasa creamy. <br />
    Terdapat 4 varian rasa: <br />- Creamy Chocolate<br />- Creamy Cheese<br />- Sweet Pandan </p></Col>
          </Row>
          <hr />
          <h2 className='fw-bold'>Anda Mungkin Juga Suka</h2>
          <Row className='ms-5'>
                      {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Kopi.png" alt="unspalsh.com" className="katalog rounded shadow mt-3" />
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
              );
            })}

            {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
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
              );
            })}        

           {ProdukTerbaru.slice(0, 1).map((Produk) => {
              return (
                <Col key={Produk.id} className="rounded">
                  <img src="../img/Nct.png"alt="unspalsh.com" className="katalog rounded shadow mt-3" />
                  <h3 className="fw-bold">Lightstick NCT Dream Korea</h3>
                  <p style={{ fontSize: '0.8rem' }} >Lampu stik khusus yang melambangkan fandom atau perkumpulan dari fans NCT.</p>
                  <Row>
                    <Col>
                      <h5 className="fw-bold">
                        <FaCartPlus className="ikoncart-p fa-xl me-2" />
                        Rp 800.000
                      </h5>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
      </Item.Group>
          </Col>
        </Row>
      </Container >
  )
}

export default Itemm
