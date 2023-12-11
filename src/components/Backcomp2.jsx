import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";

const MyComponent = () => {
  return (
    <Container>
      <div className=" d-flex gap-2 align-items-md-center ">
        <Button variant='light' className=' rounded-5 '  style={{fontSize:"20px"}}>
          <IoIosArrowBack /> 
        </Button>
        <div style={{width:"25px" , height:"25px", textAlign:"center"}} >Keranjang</div>
      </div>
    </Container>
  );
};

export default MyComponent;
