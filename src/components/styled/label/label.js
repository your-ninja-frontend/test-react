import styled, { css } from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  ${(props) =>
    props.$bold
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `}
`;

export default Label;
