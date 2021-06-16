import React from "react";
import Logo from '../../assets/Logo1.png'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,ImageLogo
} from "./style";
  
const Footer = () => {
  return (
    <Box>
     
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       <ImageLogo src={Logo} /> CoinGecko
      </h1>
      <h6 style={{fontSize:"20px",color: "green", 
                   textAlign: "center", }}> CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.</h6>
      <Container>
        <Row>
          <Column>
            <Heading>CoinGecko</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Methodology</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Branding Guide</FooterLink>
            <FooterLink href="#">Advertising</FooterLink>
            
          </Column>
          <Column>
            <Heading>Donation</Heading>
            <FooterLink href="#">Bitcoin</FooterLink>
            <FooterLink href="#">Ethereum</FooterLink>
         
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Seoul</FooterLink>
            <FooterLink href="#">Busan</FooterLink>
           
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <h6 style={{textAlign:"center", color:"white"}} >&copy; Copyright 2021 CoinGecko. All Rights Reserved</h6>
      </Container>
    </Box>
  );
};
export default Footer;