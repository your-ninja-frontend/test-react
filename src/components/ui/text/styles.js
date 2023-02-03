import styled from "styled-components";
import { TextSize } from "./text";

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${(props) => {
    let fontSize = props.theme.fontSizeDefault;
    if (props.$size === TextSize.SMALL) {
      fontSize = "14px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "150%";
    if (props.$size === TextSize.SMALL) {
      lineHeight = "130%";
    }
    return lineHeight;
  }};
  font-weight: 400;
`;
