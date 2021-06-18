import React from "react";


import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "./style";
  
const Footer = () => {
  return (
    <Box>
     
     
      <Container>
        <Row>
          <Column>
            <Heading>Crypto.Uz</Heading>
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
        <h6 style={{textAlign:"center", color:"white"}} >&copy; Copyright 2021 Crypto.Uz All Rights Reserved</h6>
      </Container>
    </Box>
  );
};
export default Footer;