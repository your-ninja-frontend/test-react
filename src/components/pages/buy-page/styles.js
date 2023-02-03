import styled, { css } from "styled-components";
import TextInput from "/src/components/ui/text-input/text-input";
import Label from "/src/components/styled/label/label";
import { Swiper } from "swiper/react";
import checked from "/src/assets/checked.svg";
import Price from "/src/components/ui/price/price";

export const StyledBuyPage = styled.section`
  background-color: ${(props) => props.theme.colorBackgroundPageBuy};
`;

export const StyledBuyPageWrapper = styled.div`
  display: grid;
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  bottom: 80px;
  grid-template-columns: 353px 1fr;
  gap: 20px;
  padding: 40px ${(props) => props.theme.pagePadding} 0;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
`;

export const LeftColumn = styled.div`
  grid-column: 1 / 2;
  overflow-y: overlay;
`;

export const InputForAddres = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  line-height: 21px;
`;

export const PriceValue = styled(Price)`
  display: block;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxForProduct = styled.span`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    ${(props) =>
      props.$isChecked
        ? css`
            background-image: url(${checked});
            background-repeat: no-repeat;
            background-position: center;
            background-color: ${props.theme.colorOrange};
          `
        : css`
            background-color: ${props.theme.colorBackgroundPageBuy};
          `}
  }
`;
