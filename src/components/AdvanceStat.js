import React from "react";
import styled from "styled-components";
import AdvanceStatElem from "./AdvanceStatElem";

const AdvanceStat = () => {
  return (
    <>
      <Container>
        <Heading>Advanced Statistics</Heading>
        <Paragraph>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard
        </Paragraph>
        <AdvanceStatElem />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #fff;
  width: 90%;
  margin: 5% auto;

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 18px;
  color: #777;

  @media (max-width: 800px) {
    margin-top: 15px;
  }
`;
export default AdvanceStat;
