import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Text from "/src/components/ui/text/text";

export const AdvantagesCardImage = styled.img`
  grid-column: 1 / 2;
`;

export const AdvantagesCardLabel = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${(props) => props.theme.colorWhite};
  display: inline-block;
  margin-bottom: 4px;
  padding: 4px 10px;
  background-color: ${(props) => {
    let color = props.theme.colorGray;
    if (props.$labelFerm) {
      color = props.theme.colorGreen;
    }
    if (props.$labelMagazine) {
      color = props.theme.colorRed;
    }
    return color;
  }};

  &::after {
    content: ${(props) => {
      let text = `"Продукты"`;
      if (props.$labelFerm) {
        text = `"Фермерские продукты"`;
      }
      if (props.$labelMagazine) {
        text = `"Магазинные продукты"`;
      }
      return text;
    }};
  }
`;

export const AdvantagesCardTitle = styled(Title)`
  grid-column: 2 / -1;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
`;

export const AdvantagesCardInfo = styled(Text)`
  grid-column: 1 / -1;
`;
