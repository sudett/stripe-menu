import styled from "styled-components";
import { ReactComponent as Phone } from "../../assets/phone.svg";

export const HeaderContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  column-gap: 5rem;
  align-items: center;

  @media only screen and (max-width: 75em) {
    margin-top: 5rem;
  }

  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    width: 80vw;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Heading = styled.h1`
  font-size: 9rem;
  line-height: 1;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  max-width: 70rem;
  text-align: left;

  @media only screen and (max-width: 75em) {
    font-size: 5rem;
    max-width: 40rem;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 50em) {
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  color: var(--clr-grey-5);
  font-size: 2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: left;

  @media only screen and (max-width: 75em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.5rem;
  }
`;

export const PhoneContainer = styled(Phone)`
  height: 48rem;

  @media only screen and (max-width: 75em) {
    height: 40rem;
  }

  @media only screen and (max-width: 50em) {
    display: none;
  }
`;
