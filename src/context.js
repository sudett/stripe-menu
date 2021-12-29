import React, { createContext, useState, useContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ top: "", left: "" });
  const [submenuPage, setSubmenuPage] = useState({ page: "", links: [] });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const closeSubmenu = () => setIsSubmenuOpen(false);

  const openSubmenu = (e) => {
    const { bottom, left, right } = e.target.getBoundingClientRect();
    const btnText = e.target.textContent.toLowerCase();
    const { page, links } = sublinks.find(
      (sublink) => sublink.page === btnText
    );
    const submenuTop = `${bottom - 10}px`;
    const submenuLeft = `${(left + right) / 2}px`;

    setCoordinates({ top: submenuTop, left: submenuLeft });
    setSubmenuPage({ page, links });
    setIsSubmenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        coordinates,
        submenuPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
