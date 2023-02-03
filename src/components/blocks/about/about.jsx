import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { TextSize } from "/src/components/ui/text/text";
import { StyledAbout, StyledAboutWrapper, AboutText } from "./styles";

const About = ({ level }) => {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <Title size={TitleSize.BIG} level={level}>
          Магазин фермерских <br></br> продуктов с доставкой
        </Title>
        <AboutText size={TextSize.DEFAULT}>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutText>
      </StyledAboutWrapper>
    </StyledAbout>
  );
};

export default About;
