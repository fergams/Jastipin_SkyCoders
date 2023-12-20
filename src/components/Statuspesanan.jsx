import NavbarComponentLogin from './NavbarComponentLogin'
import '../Style/Profil.css'
import people from '../assets/img/testimonial/people-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faUser, faStickyNote, faShoppingCart, faShop, faSignOut, faComments } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import ModalKeluar from './ModalKeluar'
import status from '../assets/img/statuspesanan.png'

const status = () => {
const iconSize = '2x';
let navigate = useNavigate();
    return (
    <>
        <div className="" style={{height:'125px', backgroundColor:'#0081C9'}}>
            <NavbarComponentLogin />
        </div>
        <div className="profile d-flex">
            <div className="slidebar bg-white col-auto col-md-2.6 col-lg-3 min-vh-90" >
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
                        <p>Profile Saya</p>
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
            <div className="content ">
              <div className="status d-flex" style={{backgroundColor:'#D7E3F6',height:'40px', width:'850px',borderRadius:'10px', marginTop:'2%'}}>
                <div className="1">
                     <img src={status} className='q' alt="" style={{height:'30px', marginLeft:'15px', marginTop:'5px'}}/>
                </div>
               <div className="2">
                    <h1 style={{marginLeft:'10px'}}>Status Pesanan Saya</h1>
               </div>
                
              </div>
              <div className="navbarstatus" style={{backgroundColor:'#D7E3F6',height:'40px', width:'850px',borderRadius:'10px', marginTop:'2%'}}>
                <p>hshshshshshsh</p>
              </div>
             
            </div>
        </div>
        <Footer />
    </>
    )
}

export default status
