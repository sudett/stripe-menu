import React from "react";

import Navbar from "../navbar/navbar.component";
import HeaderContent from "../header-content/header-content.component";

import { HeaderContainer, Container } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Navbar />
        <HeaderContent />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
