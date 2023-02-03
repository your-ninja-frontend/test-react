import React from "react";
import { StyledButton } from "./styles";

const Button = ({
  children,
  link,
  className,
  maxWidth,
  paddingTop,
  paddingBottom,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      {...(link ? { to: link } : { as: "button", type: "button", onClick })}
      className={className}
      $maxWidth={maxWidth}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
