import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const logoSyle = css`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoSyle}
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
export const StyledLogoMainPage = styled.span`
  ${logoSyle}
`;

export const Text = styled.span`
  font-size: 28px;
  line-height: 32.2px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlack};
  margin-left: 24px;
`;
