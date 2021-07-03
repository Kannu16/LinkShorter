import React, { useState } from "react";
import styled from "styled-components";

const NavbarElements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href=" ">Shortly</Logo>
      <Hamburger onClick={hamBurger}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLinks href="">Features</MenuLinks>

        <MenuLinks href="">Pricing</MenuLinks>

        <MenuLinks href="">Resources</MenuLinks>

        <Line />
        <Login id="right" href=" ">
          Login
        </Login>
        <Signup id="right" href=" ">
          Sign Up
        </Signup>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Logo = styled.a`
  text-decoration: none;
  margin-right: 30px;
  padding: 1rem;
  color: #232127;
  font-weight: 700;
  font-size: 25px;
`;
const Hamburger = styled.span`
  display: none;
  flex-direction: column;
  margin-top: 20px;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin: 4px;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.5s;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};

  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    background: #35323e;
    border-radius: 10px;
    justify-content: space-between;
  }
`;
const MenuLinks = styled.a`
  text-decoration: none;
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  color: #3b3054;
  transition: 0.5s;
  font-size: 14px;

  &:hover {
    color: #7b7fda;
  }

  @media (max-width: 800px) {
    color: #fff;
  }
`;

const Line = styled.hr`
  @media (max-width: 800px) {
    width: 80%;
    background-color: #fff;
  }
`;
const Login = styled.a`
  text-decoration: none;
  padding: 1rem 1.2rem;
  cursor: pointer;
  text-align: center;
  color: #3b3054;
  transition: 0.5s;
  font-size: 14px;

  &:hover {
    color: #7b7fda;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 800px) {
    color: #fff;
  }
`;

const Signup = styled.a`
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  text-align: center;
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  background: #2acfcf;
  border-radius: 50px;

  &:hover {
    color: #7b7fda;
  }
  @media (max-width: 800px) {
    margin-bottom: 5px;
    width: 70%;
  }
`;
export default NavbarElements;
