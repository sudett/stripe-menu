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
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <Navigation
      onMouseOver={(e) => {
        if (!e.target.classList.contains("btn")) closeSubmenu();
      }}
    >
      <Logo />
      <NavigationList>
        {sublinks.map(({ page }, index) => (
          <li key={index}>
            <NavigationButton className="btn" onMouseOver={openSubmenu}>
              {page}
            </NavigationButton>
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
