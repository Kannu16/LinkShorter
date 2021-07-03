import React from "react";
import styled from "styled-components";
import Facebook from "./images/icon-facebook.svg";
import Twitter from "./images/icon-twitter.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Instagram from "./images/icon-instagram.svg";
import Shortly from "./images/logo.svg";

const FooterContent = (props) => {
  return (
    <FooterContainer>
      <Box1>
        {" "}
        <Logo src={Shortly} alt="logo" />{" "}
      </Box1>
      <Box2>
        <Heading>Features</Heading>
        <UnOrderList>
          <ListItem>
            <Anchor href=" ">Link Shortening</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Branded Links</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Analytics</Anchor>
          </ListItem>
        </UnOrderList>
      </Box2>
      <Box3>
        <Heading>Resources</Heading>
        <UnOrderList>
          <ListItem>
            <Anchor href=" ">Blog</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Developers</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Support</Anchor>
          </ListItem>
        </UnOrderList>
      </Box3>
      <Box4>
        <Heading>Company</Heading>
        <UnOrderList>
          <ListItem>
            <Anchor href=" ">About</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Our Team</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Careers</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href=" ">Contact</Anchor>
          </ListItem>
        </UnOrderList>
      </Box4>
      <Box5>
        <Anchor href=" ">
          <Image src={Facebook} alt="facebook-icon" />
        </Anchor>
        <Anchor href=" ">
          <Image src={Twitter} alt="facebook-icon" />
        </Anchor>
        <Anchor href=" ">
          <Image src={Pinterest} alt="facebook-icon" />
        </Anchor>
        <Anchor href=" ">
          <Image src={Instagram} alt="facebook-icon" />
        </Anchor>
      </Box5>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232127;
  margin-top: -6px;
  padding: 5rem 0;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
`;

const Heading = styled.h3``;

const Logo = styled.img`
  width: 50%;
  height: 50%;
`;
const Box1 = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  color: #fff;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    position: relative;
    top: -50px;
  }
`;
const Box2 = styled.div`
  width: 15%;
  display: flex;
  color: #fff;
  height: 100%;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    position: absolute;
    top: 20%;
    margin-left: 20px;
  }
`;

const UnOrderList = styled.ul`
  position: relative;
  top: 15px;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font-size: 14px;

  &:hover {
    color: #7b7fda;
  }
`;
const ListItem = styled.li`
  list-style: none;
  padding: 5px 0;
  position: relative;
  top: 40px;
  right: 80px;
`;
const Box3 = styled.div`
  width: 15%;
  display: flex;
  color: #fff;
  justify-content: center;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    position: absolute;
    top: 40%;
  }
`;
const Box4 = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  color: #fff;
  height: 100%;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    position: relative;
    top: 10%;
    justify-content: center;
  }
`;
const Box5 = styled.div`
  width: 25%;
  display: flex;
  color: #fff;
  height: 100%;

  @media (max-width: 800px) {
    position: absolute;
    top: 90%;
    width: 100%;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 30px;
  padding: 0px 10px;

  &:hover {
    color: #7b7fda;
  }
`;

export default FooterContent;
