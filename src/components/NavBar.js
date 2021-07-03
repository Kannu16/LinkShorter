import React from "react";
import styled from "styled-components";
import NavbarElements from "./NavbarElements";
const NavBar = () => {

  return (
    <>
      <Container>
         <NavbarElements />
      </Container>
    </>
  );
};


const Container = styled.div`
 background:#fff;
 width: 90%;
 margin: auto;
 height: 100%;

`
export default NavBar;
