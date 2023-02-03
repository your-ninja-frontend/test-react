import React from "react";
import { TextSize } from "/src/components/ui/text/text";
import { TitleLevel } from "/src/components/ui/title/title";
import {
  AdvantagesCardImage,
  AdvantagesCardLabel,
  AdvantagesCardTitle,
  AdvantagesCardInfo
} from "./styles";

const AdvantagesCard = ({ title, text, icon, labelFerm, labelMagazine }) => {
  return (
    <>
      <AdvantagesCardImage src={icon} alt={title}></AdvantagesCardImage>
      <div>
        <AdvantagesCardLabel
          $labelFerm={labelFerm}
          $labelMagazine={labelMagazine}
        ></AdvantagesCardLabel>
        <AdvantagesCardTitle level={TitleLevel.H3}>
          {title}{" "}
        </AdvantagesCardTitle>
      </div>
      <AdvantagesCardInfo size={TextSize.DEFAULT}>{text}</AdvantagesCardInfo>
    </>
  );
};

export default AdvantagesCard;
