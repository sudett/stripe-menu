import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

import { SubmenuContainer, NavSubmenu, NavSubmenuLink } from "./submenu.styles";
import { SubmenuPage } from "../sidebar/sidebar.styles";

const Submenu = () => {
  const [gridCol, setGridCol] = useState(2);
  const {
    isSubmenuOpen,
    coordinates,
    submenuPage: { page, links },
  } = useGlobalContext();

  useEffect(() => {
    if (links.length === 3) setGridCol(3);
    if (links.length >= 4) setGridCol(4);
  }, [coordinates]);

  return (
    <SubmenuContainer isSubmenuOpen={isSubmenuOpen} coordinates={coordinates}>
      <SubmenuPage>{page}</SubmenuPage>
      <NavSubmenu gridCol={gridCol}>
        {links.map(({ label, icon, url }, index) => (
          <li key={index}>
            <NavSubmenuLink href={url}>
              {icon}
              {label}
            </NavSubmenuLink>
          </li>
        ))}
      </NavSubmenu>
    </SubmenuContainer>
  );
};

export default Submenu;
