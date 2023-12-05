import NavbarComponentLogin from '../components/NavbarComponentLogin'
import '../Style/Profil.css'
import people from '../assets/img/testimonial/people-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faUser, faStickyNote, faShoppingCart, faShop, faSignOut, faComments } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";

const Profil = () => {
const iconSize = '2x';
let navigate = useNavigate();
    return (
    <>
        <div className="" style={{height:'125px', backgroundColor:'#0081C9'}}>
            <NavbarComponentLogin />
        </div>
        <div className="profile d-flex">
            <div className="slidebar bg-white col-auto col-md-2.6 col-lg-3 min-vh-90" style={{paddingBottom:'20px'}}>
                <div className="logo-profile d-flex align-items-center">
                    <img src= {people} alt="peaple-1" 
                    className='img-fluif rounded-circle ml-4 mt-4'
                    style={{width:'80px', height:'80px', marginLeft:'20px'}}
                    />
                    <div className="teks-prof">
                        <p>Angel Safitri</p>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
                            <p className='' style={{fontSize:'14px'}}>Ubah Profile</p>
                        </div>
                    </div>
                </div>
                <hr className='my-4 mx-4 border-2' style={{borderColor:'dark', borderWidth:'3'}} />
                <div className="list">
                    <div className="list1 d-flex  align-items-center">
                        <FontAwesomeIcon icon={faUser} className={`mr-2 fa-${iconSize}`} />
                        <p style={{color:'#0081C9'}}>Profile Saya</p>
                    </div>
                    <div className="list1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faShoppingCart} className={`mr-2 fa-${iconSize}`} />
                        <p className='' onClick={() => navigate("/StatusPesanan")} style={{fontSize:'20px', cursor:'pointer'}}>Pesanan</p>
                    </div>
                    <div className="list1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faComments} className={`mr-2 fa-${iconSize}`} />
                        <p className='' onClick={() => navigate("/Obrolan")} style={{fontSize:'20px', cursor:'pointer'}}>Obrolan</p>
                    </div>
                    <div className="list1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faShop} className={`mr-2 fa-${iconSize}`} />
                        <p className='' onClick={() => navigate("/MulaiBerjualan")} style={{fontSize:'20px', cursor:'pointer'}}>Mulai Berjualan</p>
                    </div>
                    <div className="list1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faSignOut} className={`mr-2 fa-${iconSize}`} />
                        <p className='' onClick={() => navigate("/ModalKeluar")} style={{fontSize:'20px', cursor:'pointer'}}>Keluar</p>
                    </div>
                </div>
            </div>
            <div className="content" style={{backgroundColor:'#D7E3F6', width:'80%'}}>
             <div className="" style={{marginTop:'2%', marginLeft:'7%'}}>
                <p style={{fontSize:'25px', fontWeight:'bold', letterSpacing:'2px', marginBottom:'0'}}>PROFILE</p>
                <p style={{fontSize:'18px', maxWidth:'80%', marginTop:'5px', marginBottom:'0', lineHeight:'1.2'}}>Kelola informasi profil anda untuk mengontrol, melindungi dan mengamankan akun.</p>
             </div>
             <hr className='my-4 mx-4 border-2' style={{borderColor:'dark', borderWidth:'3', marginTop:'0'}} />
             <form action="">
                <form class="" style={{marginLeft:'7%'}}>
                    <p style={{marginBottom:'15px', fontWeight:'bold'}}>NAMA</p>
                    <input type="Nama" class="inputl" placeholder="Angel Safitri"/>
                    <p style={{marginBottom:'10px', fontWeight:'bold', marginTop:'10px'}}>Email</p>
                    <input type="Nama" class="inputl" placeholder="Angel.safitri@gmail.com"/>
                    <p style={{marginBottom:'10px',marginTop:'10px', fontWeight:'bold'}}>NAMA PENGGUNA</p>
                    <input type="Nama" class="inputl" placeholder="Angel123"/>
                    <p style={{marginBottom:'10px',marginTop:'10px', fontWeight:'bold'}}>ALAMAT</p>
                    <input type="Nama" class="inputl" placeholder="Batam"/>
                    <p style={{marginBottom:'10px',marginTop:'10px', fontWeight:'bold'}}>NO. TELP</p>
                    <input type="Nama" class="inputl" placeholder="+(62) 895-3781-5672"/>
                    <button class="Tombol-Simpan" onClick={() => navigate("/")}>Simpan</button>
                    
                </form>
            </form>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Profil
