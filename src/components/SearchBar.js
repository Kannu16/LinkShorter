import React, { useState } from "react";
import styled from "styled-components";
import ShortenBg from "./images/bg-shorten.png";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

//https://api.shrtco.de/v2/shorten?url=https://slider16.000webhostapp.com/
const SearchBar = () => {
  const input = document.getElementById("url");
  const error = document.getElementById("error");
  const copyBtn = document.getElementById("copyBtn");
  const [Link, setLink] = useState();
  const [shortLink, setShortLink] = useState(
    "Please wait We are generating Your Link"
  );

  const [copied, setCopied] = useState(false);

  async function getData() {
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${Link}`
      );
      setShortLink(res.data.result.full_short_link);
    } catch (massage) {
      error.innerHTML =
        "Something Went Wrong!!  Please check your url or try after some time";
    }
  }

  const Shorten = (e) => {
    e.preventDefault();
    getData();
    console.log("submitted");
    input.style.display = "block";
    copyBtn.style.display = "block";
  };

  return (
    <Container>
      <Epara id="error"></Epara>
      <Image src={ShortenBg} alt="Shorten" />
      <Row>
        <form onSubmit={Shorten}>
          <Box1>
            <Input
              type="text"
              value={Link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
              placeholder="Paste Your Link Here....."
              required
            />
          </Box1>
          <Box2>
            <Button>Shorten it!</Button>
          </Box2>
        </form>
        <InputBox
          value={shortLink}
          id="url"
          onChange={({ target: { shortLink } }) => {
            setShortLink(shortLink);
            setCopied(false);
          }}
        />
        <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
          <Copy id="copyBtn">Copy</Copy>
        </CopyToClipboard>

        {copied ? <span style={{ color: "red" }}>Copied...</span> : null}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  width: 90%;
  height: 100%;
  margin: auto;
  background: #35323e;
  border-radius: 20px;
  position: relative;
  margin-top: 10%;
`;

const Image = styled.img`
  width: 100%;
  height: 20vh;
  border-radius: 20px;
`;
const Row = styled.div`
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Epara = styled.p`
  color: Yellow;
  padding: 1rem 3rem;
  font-size: 15px;
`;
const InputBox = styled.input`
  margin-left: 70px;
  display: none;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 20px;
  background: #35323e;
  color: #fff;
  position: relative;
  top: 50px;
  width: 20%;
`;
const Box1 = styled.div`
  width: 70%;
  position: absolute;
  top: 40%;
  padding: 0 4rem;

  @media (max-width: 800px) {
    top: 20%;
    padding: 0 3rem;
  }
`;
const Box2 = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  padding: 0 4rem;
  width: 15%;

  @media (max-width: 800px) {
    width: 100%;
    top: 35%;
    padding: 0 3.2rem;
  }
`;

const Copy = styled.button`
  padding: 10px 20px;
  color: #fff;
  background: #2acfcf;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-left: 10px;
  display: none;
  position: relative;
  top: 50px;
`;
const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  color: #777;
  border-radius: 10px;
  outline: none;
  border: none;

  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  background: #2acfcf;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  @media (max-width: 800px) {
    position: relative;
    top: 50px;
    padding: 10px 20px;
    width: 80%;
    margin-left: 100px;
  }
`;
export default SearchBar;
