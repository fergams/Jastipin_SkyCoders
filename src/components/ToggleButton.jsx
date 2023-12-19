import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Logo_BRI from '../assets/img/Logo_BRI.png'
import { useNavigate } from "react-router-dom";   

function butonOpsi() {
  let navigate = useNavigate();
    return (
      <>
        <ToggleButtonGroup style={{width:"470px"}} type="radio" name="options" defaultValue={1}>
          <ToggleButton className=' d-sm-flex align-content-sm-center  ' id="tbg-radio-1" value={1}>
            <div className=' align-items-xl-center '>Transfer Bank <img style={{width:"100px", height:"25px"}} src={Logo_BRI} alt="" /></div>
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2} onClick={() => navigate("/Pembayaran")} style={{cursor:'pointer'}}>
            COD
          </ToggleButton>
          {/* <ToggleButton id="tbg-radio-3" value={3}>
            Radio 3
          </ToggleButton> */}
        </ToggleButtonGroup>
      </>
    );
  }
  
  export default butonOpsi;