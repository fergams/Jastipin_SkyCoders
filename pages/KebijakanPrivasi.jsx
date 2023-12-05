import React from 'react'
import {Container, Row, Col} from "react-bootstrap";  
import NavbarComponentLogin from "../components/NavbarComponentLogin"; 
import Footer from "../components/Footer";
import { Button, Icon, Image, Item, Label, Rating } from 'semantic-ui-react'

const KebijakanPrivasi = () => {
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
        <Col className='judul rounded'> <Icon name='arrow circle left' className='' />Kebijakan Privasi</Col>
      </Row>
      <Row>
        <p className='text-detail'>Kami berkomitmen untuk memastikan bahwa privasi anda dilindungi. Bila kami meminta Anda untuk memberikan informasi tertentu yang dapat diidentifikasi ketika menggunakan website ini, maka informasi tersebut itu hanya akan digunakan sesuai dengan Kebijakan Privasi ini. 
        </p>
        <p className='text-align-justify'>
        A. Mendaftar Pada Website Kami
Setiap pengguna saat ini bisa mengakses dan melihat seluruh fitur yang ada di website kami mungkin tetapi tidak mengikat waktu, di masa mendatang sebuah proses registrasi dibutuhkan untuk mengakses informasi dan layanan secara penuh yang ditawarkan kami.
</p>
        <p>
Apabila proses pendaftaran dilakukan pada situs Jastip.in, Anda harus memberikan alamat e-mail dan info lain yang kami butuhkan. Dengan memakai website Jastip.in, berarti Anda setuju pada Syarat dan Ketentuan kami.
</p>
        <p>
B. Cookies dan Teknologi Lainnya
Cookie adalah satu bagian data yang disimpan di komputer pengguna yang berkaitan dengan informasi tentang pengguna tersebut. Cookie juga digunakan untuk manajemen session di website kami. Pengguna harus mengaktifkan cookie untuk website kami. Kami tidak dan tidak akan menggunakan cookie untuk mengumpulkan informasi pribadi dan pengguna manapun yang tidak dimaksudkan untuk disampaikan pada kami. 
</p>
        <p>
C. Perubahan Kebijakan Privasi
Kebijakan Privasi ini dapat diubah atau ditambah sewaktu-waktu. Setiap perubahan akan ditampilkan di halaman ini. 
        </p>
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

export default KebijakanPrivasi