import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import AdvantagesCard from "/src/components/ui/advantages-card/advantages-card";
import { AppRoute } from "/src/const";
import {
  StyledAdvantages,
  StyledAdvantagesTitle,
  StyledAdvantagesList,
  StyledAdvantagesItem,
  StyledAdvantagesButton
} from "./styles";

const Advantages = ({ advantages, level }) => {
  return (
    <StyledAdvantages>
      {advantages?.length ? (
        <>
          <StyledAdvantagesTitle size={TitleSize.MEDIUM} level={level}>
            Почему фермерские продукты лучше?
          </StyledAdvantagesTitle>
          <StyledAdvantagesList>
            {advantages.map((advantage) => (
              <StyledAdvantagesItem
                $isNegative={advantage.isNegative}
                key={advantage.id}
              >
                <AdvantagesCard {...advantage} />
              </StyledAdvantagesItem>
            ))}
          </StyledAdvantagesList>
          <StyledAdvantagesButton link={AppRoute.BUY}>
            Купить
          </StyledAdvantagesButton>
        </>
      ) : null}
    </StyledAdvantages>
  );
};

export default Advantages;
