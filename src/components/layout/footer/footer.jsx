import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <span>Создано 2023</span>
    </StyledFooter>
  );
};

export default Footer;
