import styled from "styled-components";
import { Img } from "/src/components/styled";

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
`;

export const SlideWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Price = styled.span`
  display: inline-block;
  align-self: start;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.colorBlue};
`;
