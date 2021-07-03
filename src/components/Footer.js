import React from "react";
import styled from "styled-components";
import BgBoost from "./images/bg-boost-desktop.png";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <Container>
      <Image src={BgBoost} alt="BgBoost" />
      <Heading>Boost your links today</Heading>
      <Button>Get Started</Button>

      <FooterContent />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background: #35323e;
  position: relative;
`;
const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Button = styled.button`
  padding: 0.7rem 4rem;
  color: #fff;
  border-radius: 50px;
  position: absolute;
  top: 60%;
  left: 50%;
  background: #2acfcf;
  border: none;
  cursor: pointer;
  transform: translate(-50%, -50%);

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export default Footer;
