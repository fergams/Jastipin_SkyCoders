import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin"; 
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'

const SyaratKetentuan = () => {
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
        <Col className='judul rounded'> <Icon name='arrow circle left' className='' />Syarat Dan Ketentuan</Col>
      </Row>
      <Row>
        <p className='text-detail'>Dengan menggunakan layanan Jastipin, Anda dianggap telah membaca, memahami, dan menyetujui syarat ketentuan berikut ini. Harap membaca dengan seksama sebelum menggunakan layanan kami. 
        </p>
        <p><b> 1. Penerimaan Syarat dan Ketentuan</b> <br />
                Dengan mengakses atau menggunakan Jastipin, Anda secara otomatis menyetujui dan tunduk pada syarat dan ketentuan penggunaan ini. Jika Anda tidak setuju dengan salah satu bagian dari syarat ini, kami sarankan untuk tidak melanjutkan penggunaan layanan kami.
        </p>
        <p><b>2. Penggunaan Layanan</b><br />
                a. Layanan [Nama Jasa Titip] hanya dapat digunakan untuk tujuan yang sah sesuai dengan hukum. <br />
                b. Anda bertanggung jawab penuh atas akurasi dan kelengkapan informasi yang Anda berikan saat 
    menggunakan layanan kami.
        </p>
        <p><b>3. Pembayaran dan Biaya Layanan</b><br />
                a. Biaya layanan Jastipin Informasi terkini tentang biaya layanan dapat ditemukan di situs web kami. <br />
                b. Pembayaran harus dilakukan sesuai dengan metode pembayaran yang tersedia di situs web kami.
        </p>
        <p><b>4. Keamanan dan Privasi</b><br />
                a. Kami berkomitmen untuk menjaga keamanan dan privasi informasi Anda. <br />
                b. Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda, termasuk kata sandi. 
        </p>
        <p><b>5. Tanggung Jawab</b><br />
                a. Jastipin tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan layanan kami. <br />
                b. Anda setuju untuk memberikan ganti rugi kepada Jastipin dari dan terhadap semua tuntutan, kerugian, dan biaya yang timbul akibat pelanggaran terhadap syarat dan ketentuan ini.
        </p>
        <p className='sk text-align-center'><b>Dengan menggunakan layanan Jastipin Anda setuju untuk mematuhi syarat dan ketentuan ini. <br /> Jika Anda memiliki pertanyaan atau kekhawatiran, silakan hubungi tim layanan pelanggan kami. <br />
Terima kasih atas kepercayaan Anda menggunakan Jastipin sebagai solusi jasa titip terpercaya!</b></p>
      </Row>
      <Row>
        <Col>
        <div>_</div>
        </Col>
      </Row>
    </Container>
    
    <Footer className="text-detail"/>
    </div>
  )
}

export default SyaratKetentuan