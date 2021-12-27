import React from "react";

import { useGlobalContext } from "../../context";

import { FaTimes } from "react-icons/fa";

import sublinks from "../../data";

import {
  SidebarContainer,
  SideOverlay,
  SideWindow,
  ButtonClose,
  SubmenuPage,
  Submenu,
  SubmentItem,
  SubmenuLink,
} from "./sidebar.styles";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SideOverlay></SideOverlay>
      <SideWindow>
        <ButtonClose onClick={closeSidebar}>
          <FaTimes />
        </ButtonClose>
        <ul>
          {sublinks.map(({ page, links }, index) => (
            <SubmenuPage key={index}>
              {page}
              <Submenu>
                {links.map(({ label, icon, url }, index) => (
                  <SubmentItem key={index}>
                    <SubmenuLink href={url}>
                      {icon}
                      {label}
                    </SubmenuLink>
                  </SubmentItem>
                ))}
              </Submenu>
            </SubmenuPage>
          ))}
        </ul>
      </SideWindow>
    </SidebarContainer>
  );
};

export default Sidebar;
