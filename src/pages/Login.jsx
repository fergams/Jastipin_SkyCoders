import React from 'react'
import user from "../assets/img/user.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  let navigate = useNavigate();
  return (
    
<div className='login-logo w-100 min-vh-100 d-flex align-items-left rounded'>

<div class="form-container">
{<img src={user} width="120" height="120" alt="Profle" className="position-relative  start-50 translate-middle m-2 heihgt-20 mt-5" />}     
<form class="form">
<input type="email" class="inputl" placeholder="Email"/>
<input type="password" class="inputl" placeholder="Password"/>
<button class="form-btn" onClick={() => navigate("/HomeLogin")}>Masuk</button>
</form>
<p class="sign-up-label text-align-center">
-------------- atau -------------
</p>
<div class="buttons-container">
<button class="form-btn-overlay" onClick={() => navigate("/Signin")}>Daftar</button>

</div>
</div>

</div>
  )
}

export default Login