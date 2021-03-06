import React from "react";
import { useGlobalContext } from "../../context";

import {
  HeaderContentContainer,
  TextContent,
  Heading,
  Text,
  PhoneContainer,
} from "./header-content.styles";
import { Button } from "../navbar/navbar.styles";

const HeaderContent = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <HeaderContentContainer onMouseOver={closeSubmenu}>
      <TextContent>
        <Heading>Payments infrastructure for the internet</Heading>
        <Text>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </Text>
        <Button>Start now</Button>
      </TextContent>
      <PhoneContainer />
    </HeaderContentContainer>
  );
};

export default HeaderContent;
