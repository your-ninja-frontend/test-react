import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = props.theme.fonstSizeTitleH1;
    if (props.$size === TitleSize.MEDIUM) {
      fontSize = props.theme.fonstSizeTitleH2;
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = props.theme.fonstSizeTitleH3;
    }
    if (props.$size === TitleSize.EXTRASMALL) {
      fontSize = props.theme.fonstSizeTitleH4;
    }
    if (props.$size === TitleSize.DEFAULT) {
      fontSize = props.theme.fontSizeDefault;
    }
    return fontSize;
  }};
  line-height: 115%;
`;
