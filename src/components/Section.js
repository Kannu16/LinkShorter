import React from "react";
import styled from "styled-components";
import Working from "./images/working.png";

const Section = () => {
  return (
    <Container>
      <Row>
        <Box1>
          <Heading>
            {" "}
            More than just <br /> sorter links{" "}
          </Heading>
          <HeadingPara>
            Build your brand's recognition and get detailed <br /> insights on
            how your links are performing{" "}
          </HeadingPara>
          <Button>Get Started</Button>
        </Box1>
        <Box2>
          <Image src={Working} alt="Working man on computer" />
        </Box2>
      </Row>
    </Container>
  );
};
const Container = styled.div`
  background: #fff;
  width: 90%;
  margin: 5% auto;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
const HeadingPara = styled.p`
  color: #777;
  padding: 0 3rem;
  margin-top: -30px;
  font-size: 18px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-size: 5rem;
  padding: 2rem 3rem;
  @media (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    position: relative;
    left: 15%;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.4rem;
  cursor: pointer;
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  background: #2acfcf;
  border-radius: 50px;
  margin: 1.5rem 3rem;
  border: none;
`;
export default Section;
