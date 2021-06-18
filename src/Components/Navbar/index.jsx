import React from 'react'
import { Navbar ,Container} from 'react-bootstrap';
import Logo from '../../assets/logo1.png'
import{NavContainer} from  "./style"
const CryptoNavbar = () => {
   return (
      <NavContainer>
      <Navbar bg="#303030" variant="dark">
        <Container>
          <Navbar.Brand style={{color:"#ff6701"}} href="/">
          <img
         style={{color:"#ff6701"}}
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />  Crypto.Uz
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </NavContainer>
   )
}

export default CryptoNavbar
