import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      {/* Contact Information */}
      <ContactInfo>
        <div>📞 0911223456</div>
        <div>📧 estateplus@gmail.com</div>
        <div>📍 123/B, Galle, Sri Lanka</div>
      </ContactInfo>

      

      {/* Buttons */}
      <ButtonSection>
        <Button href="/#">Become a Property Owner</Button>
        <Button href="/#">Become a Service Provider</Button>
      </ButtonSection>

      {/* Copyright */}
      <Copyright>
        © {new Date().getFullYear()} EstatePlus. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #e8f5e9;
  padding: 20px;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 70px;
`;

const FooterLinks = styled.div`
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const Button = styled.a`
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  background-color: #dcedc8;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #aed581;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

export default Footer;
