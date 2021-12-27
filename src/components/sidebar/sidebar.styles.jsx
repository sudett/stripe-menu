import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-grey-5);
  transition: all 0.4s ease;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "scale(1)" : "scale(0)"};
  visibility: ${({ isSidebarOpen }) => (isSidebarOpen ? "visible" : "hidden")};

  @media only screen and (min-width: 50em) {
    display: none;
  }
`;

export const SideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-black);
  opacity: 0.5;
`;

export const SideWindow = styled.div`
  position: relative;
  background-color: #fff;
  height: 95%;
  width: 90%;
  max-width: 60rem;
  border-radius: 0.5rem;
  z-index: 10;
  box-shadow: var(--dark-shadow);
  padding: 6rem 3rem;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font-size: 3rem;
  cursor: pointer;
`;

export const SubmenuPage = styled.li`
  color: var(--clr-grey-2);
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

export const Submenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const SubmentItem = styled.li`
  flex-basis: 50%;
`;

export const SubmenuLink = styled.a`
  color: var(--clr-grey-4);
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-weight: normal;
  font-size: 1.4rem;

  svg {
    margin-right: 1.5rem;
  }
`;
