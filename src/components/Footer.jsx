import React from 'react'
import '../Style/Footer.css'
import Logo_Jastip from '../assets/img/Logo_Jastip.png'
import Logo_fb from '../assets/img/Logo_fb.png'
import Logo_ig from '../assets/img/Logo_ig.png'
import Logo_tw from '../assets/img/Logo_tw.png'
import Logo_BRI from '../assets/img/Logo_BRI.png'
import { useNavigate } from "react-router-dom";

const Footer = () => {
let navigate = useNavigate();
  return (
    <div className='footer'>
      <div className="footer1">
        < img
          src={Logo_Jastip}
          className='logo-jastip'
          alt="logo-jastip" 
        />
        <div className="ket">
          <p>Jl. Ahmad Yani Batam Kota. Kota Batam. <br /> 
            kepulauan Riau. Indonesia.</p>
          <p>Phone : +62 857-0402-9439 <br />
            Email   : jastipin@gmail.com</p>
          <p>Copyright <span>Jastipin</span></p>
        </div>
      </div>

      <div className="footer2">
        <p>Metode Pembayaran</p>
        <img src={Logo_BRI} alt="Logo_BRI" />
      </div>

      <div className="footer3">
        <p>Layanan Pelanggan</p>

        <div className="tentang">
          <p className='' onClick={() => navigate("/TentangKami")} style={{cursor:'pointer'}}>Tentang Kami</p>
          <p className='' onClick={() => navigate("/FAQ")} style={{cursor:'pointer'}}>FAQ</p>
          <p className='' onClick={() => navigate("SyaratKetentuan")} style={{cursor:'pointer'}}>Syarat dan Ketentuan</p>
          <p className='' onClick={() => navigate("KebijakanPrivasi")} style={{cursor:'pointer'}}>Kebijakan Privasi</p>
        </div>
      </div>

      <div className="footer4">
        <p>Ikuti Kami</p>

        <div className="icon">
        <img src={Logo_fb} alt="Logo_BRI" />
        <img src={Logo_ig} alt="Logo_BRI" />
        <img src={Logo_tw} alt="Logo_BRI" />
        </div>
    
      </div>
    </div>
  )
}

export default Footer