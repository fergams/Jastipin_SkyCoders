import NavbarComponentLogin from '../components/NavbarComponentLogin'
import Logo from "../assets/img/TentangKami.png"
import Footer from '../components/Footer'
import ten from "../assets/img/tenkam.png"
import Logo1 from "../assets/img/Logo_Jastip.png"
import { useNavigate } from "react-router-dom";

const TentangKami = () => {
    return (
    <div className="profile bg-primary" style={{height:'125px'}}>
        <NavbarComponentLogin />
        <img src={Logo} alt="" style={{widows:'90%', height:'200px', marginTop:'12%', marginLeft:'5%'}}/>
        <div className="container d-flex">
            <div className="teks">
             <img src={ten} alt=''style={{width:'200px', marginTop:'5%'}} />
                <p style={{fontSize:'20px', maxWidth:'100%', marginTop:'10%'}}>Selamat datang di Website Jastipin
                Solusi Terpercaya untuk Kebutuhan Jasa Titip dan Pengiriman Anda!
                Kami adalah mitra terpercaya bagi Anda yang membutuhkan
                layanan jasa titip produk dengan penuh keamanan dan kepercayaan. 
                Dengan Website Jastipin, Anda dapat dengan mudah meminta 
                bantuan kami untuk mengurus segala keperluan jasa titip pembelian produk.
                </p>
            </div>
            <div className="logo">
                <img src={Logo1} alt="" style={{width:'350px', height:'340px', marginTop:'15%',}} />
            </div>

        </div>
       


        <Footer />

    </div>
    )
}

export default TentangKami
