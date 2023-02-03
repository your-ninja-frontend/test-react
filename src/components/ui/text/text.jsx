import React from "react";
import { StyledText } from "./styles";

export const TextSize = {
  SMALL: "small",
  DEFAULT: ""
};

function Text({ children, size, className }) {
  return (
    <StyledText $size={size} className={className}>
      {children}
    </StyledText>
  );
}

export default Text;
