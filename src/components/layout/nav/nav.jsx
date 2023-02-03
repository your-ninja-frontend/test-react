import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledNavButton } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <Button
        paddingTop={10}
        paddingBottom={10}
        link={AppRoute.MAIN}
        key={AppRoute.MAIN}
      >
        Главная
      </Button>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <StyledNavButton link={AppRoute.BUY} key={AppRoute.BUY}>
        Купить
      </StyledNavButton>
    )
  }
];

const Nav = () => {
  const pathname = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pathname)
        .map((button) => button.button)}
    </nav>
  );
};

export default Nav;
