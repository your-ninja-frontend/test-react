import styled from "styled-components";
import aboutBgImage from "/src/assets/about-bg.svg";
import Text from "/src/components/ui/text/text";

export const StyledAbout = styled.section`
  padding: 183px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorBlue};
`;

export const StyledAboutWrapper = styled.div`
  position: relative;
  z-index: 0;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;

  &::after {
    content: "";
    width: 446px;
    height: 560px;
    position: absolute;
    bottom: -183px;
    right: 0;
    background-image: url(${aboutBgImage});
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

export const AboutText = styled(Text)`
  max-width: 538px;
`;
