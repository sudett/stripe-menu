import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

export const NavigationList = styled.ul`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 50em) {
    display: none;
  }
`;

export const NavigationButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 2rem;
  text-transform: capitalize;
  color: #fff;
  padding: 0 3rem;
  height: 100%;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: var(--clr-black);
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--clr-grey-5);
  }
`;

export const ButtonSignin = styled(Button)`
  @media only screen and (max-width: 50em) {
    display: none;
  }
`;

export const ButtonToggle = styled(Button)`
  display: none;

  @media only screen and (max-width: 50em) {
    display: inline-block;
  }
`;
