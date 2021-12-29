import React from "react";

import Navbar from "../navbar/navbar.component";
import HeaderContent from "../header-content/header-content.component";
import Sidebar from "../sidebar/sidebar.component";
import Submenu from "../submenu/submenu.component";

import { HeaderContainer, Container } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Navbar />
        <Submenu />
        <HeaderContent />
        <Sidebar />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
