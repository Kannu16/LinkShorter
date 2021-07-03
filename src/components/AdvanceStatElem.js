import React from "react";
import styled from "styled-components";
import BrandRecognition from "./images/icon-brand-recognition.png";
import IconDetailed from "./images/icon-detailed-records.png";
import FullyCustomizable from "./images/icon-fully-customizable.png";

const AdvanceStatElem = () => {
  return (
    <CardBody>
      <Card>
        <ImageBody>
          <BrandIcon src={BrandRecognition} alt="Brand-icon" />
        </ImageBody>
        <Heading>Brand Recognition</Heading>
        <ParaGraph>
          Boost your brand recognition with <br /> each click generic link don't
          mean a <br /> thing. branded link help instill <br /> confidence in
          your content
        </ParaGraph>
      </Card>
      <Card style={{ marginTop: "10%" }}>
        <ImageBody>
          <BrandIcon src={IconDetailed} alt="Brand-icon" />
        </ImageBody>
        <Heading>Detailed Records </Heading>
        <ParaGraph>
          Boost your brand recognition with <br /> each click generic link don't
          mean a <br /> thing. branded link help instill <br /> confidence in
          your content
        </ParaGraph>
      </Card>
      <Card style={{ marginTop: "20%" }}>
        <ImageBody>
          <BrandIcon src={FullyCustomizable} alt="Brand-icon" />
        </ImageBody>
        <Heading>Fully Customizable</Heading>
        <ParaGraph>
          Boost your brand recognition with <br /> each click generic link don't
          mean a <br /> thing. branded link help instill <br /> confidence in
          your content
        </ParaGraph>
      </Card>
    </CardBody>
  );
};

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
  }
`;
const Card = styled.div`
  margin: 40px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.h1``;
const ParaGraph = styled.p`
  color: #777;
  font-size: 18px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;
const BrandIcon = styled.img``;
const ImageBody = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #35323e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export default AdvanceStatElem;
