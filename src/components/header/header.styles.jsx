import styled from "styled-components";
import img from "../../assets/hero.svg";

export const HeaderContainer = styled.div`
  position: relative;
  padding: 0 5rem;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    z-index: -1;
  }

  @media only screen and (max-width: 50em) {
    padding: 0;

    &::before {
      height: 60%;
      background-size: cover;
    }
  }
`;

export const Container = styled.div`
  max-width: 116rem;
  margin: 0 auto;

  @media only screen and (max-width: 50em) {
    max-width: 90vw;
  }
`;
