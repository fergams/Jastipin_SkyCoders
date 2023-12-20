import NavbarComponentLogin from '../components/NavbarComponentLogin'
import '../Style/Profil.css'
import people from '../assets/img/testimonial/people-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faUser, faStickyNote, faShoppingCart, faShop, faSignOut, faComments } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
import ModalKeluar from '../components/ModalKeluar'
import kembali from '../assets/img/kembali.png'
import pembayaran from '../assets/img/pembayaran.png'

const Pembayaran = () => {
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
                        <p className='' onClick={() => navigate("/Profil")} style={{fontSize:'20px', cursor:'pointer'}}>Profile Saya</p>
                    </div>
                    <div className="list1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faShoppingCart} className={`mr-2 fa-${iconSize}`} />
                        <p className='' onClick={() => navigate("/StatusPesanan")} style={{fontSize:'20px', cursor:'pointer', color:'#0081c9'}}>Pesanan</p>
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
                        <ModalKeluar/>
                    </div>
                </div>
            </div>
            <div className="content" style={{ width:'80%'}}>
            <div className="content ">
              <div className="status d-flex" style={{backgroundColor:'#D7E3F6',height:'40px', width:'850px',borderRadius:'10px', marginTop:'2%'}}>
                <div className="1">
                     <img src={kembali} className='q' alt="" style={{height:'30px', marginLeft:'15px', marginTop:'5px'}}/>
                </div>
               <div className="2">
                    <h1 style={{marginLeft:'10px'}}>Pembayaran</h1>
               </div>
                
              </div>
              <div className="main" style={{backgroundColor:'#d7e3f6', borderRadius:'10px', marginTop:'2%', width:'93%', paddingBottom:'20px'}}>
                <img src={pembayaran} alt=""  style={{width:'100%', marginTop:'2%'}}/>
                <button class="Bayar" onClick={() => navigate("/Dikirim")} style={{marginLeft:'680px', padding:'10px 30px', borderRadius:'5px', backgroundColor:'#0081c9', border:'none', color:'white'}}>Selesai</button>
              </div>
              
            </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Pembayaran
