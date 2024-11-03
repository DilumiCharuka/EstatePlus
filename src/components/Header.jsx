// src/components/Header.jsx
import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src="public/assets/logo.png" alt="EstatePlus Logo" />
      <NavMenu>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#properties">Properties</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </NavMenu>
      <SearchContainer>
        <SearchInput placeholder="search..." />
        <FaSearch />
        <FaUser />
      </SearchContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #eaf4e8;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default Header;
