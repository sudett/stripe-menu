import React from "react";

import { useGlobalContext } from "../../context";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { FaBars } from "react-icons/fa";

import sublinks from "../../data";

import {
  Navigation,
  NavigationList,
  NavigationButton,
  ButtonSignin,
  ButtonToggle,
} from "./navbar.styles";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Navigation>
      <Logo />
      <NavigationList>
        {sublinks.map(({ page }, index) => (
          <li key={index}>
            <NavigationButton>{page}</NavigationButton>
          </li>
        ))}
      </NavigationList>

      <ButtonSignin>Sign in</ButtonSignin>

      <ButtonToggle onClick={openSidebar}>
        <FaBars />
      </ButtonToggle>
    </Navigation>
  );
};

export default Navbar;
