import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  text-align: center;
  width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  margin: 0;
  padding: 0;
  padding-top: ${(props) => props.$paddingTop || 0}px;
  padding-bottom: ${(props) => props.$paddingBottom || 0}px;
  text-decoration: none;
  border: none;
  background-color: ${(props) => props.theme.colorOrange};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  cursor: pointer;
  transition: background-color 0.4s linear, box-shadow 0.4s linear;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
