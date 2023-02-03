import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Ul, Li } from "/src/components/styled";
import Button from "/src/components/ui/button/button";

export const StyledAdvantages = styled.section`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 100px ${(props) => props.theme.pagePadding};
`;

export const StyledAdvantagesTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;

export const StyledAdvantagesList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.indent};
  margin-bottom: 64px;
`;

export const StyledAdvantagesItem = styled(Li)`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto 1fr;
  gap: ${(props) => props.theme.indent};
  max-width: 540px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) =>
    props.$isNegative
      ? props.theme.colorLightRed
      : props.theme.colorLightGreen};
`;

export const StyledAdvantagesButton = styled(Button)`
  margin: 0 auto;
  padding: 17px 98px;
`;
