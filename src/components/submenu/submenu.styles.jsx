import styled from "styled-components";
import { SubmenuLink } from "../sidebar/sidebar.styles";

export const SubmenuContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--dark-shadow);
  padding: 3rem 2rem;
  z-index: 5;
  transition: all 0.3s linear;
  left: ${({ coordinates }) => coordinates.left};
  top: ${({ coordinates }) => coordinates.top};
  display: ${({ isSubmenuOpen }) => (isSubmenuOpen ? "block" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -5px;
    transform: translateX(-50%);
    width: 1rem;
    height: 0.75rem;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background-color: #fff;
  }
`;

export const NavSubmenu = styled.ul`
  display: grid;
  grid-template-columns: ${({ gridCol }) => `repeat( ${gridCol}, 1fr)`};
  row-gap: 0.5rem;
  column-gap: 2rem;
`;

export const NavSubmenuLink = styled(SubmenuLink)`
  width: 15rem;
  text-transform: capitalize;
`;
