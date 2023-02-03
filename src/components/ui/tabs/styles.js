import styled, { css } from "styled-components";
import { Button, Ul, Li } from "/src/components/styled";

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.colorGreen};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.colorBlack};
        `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
