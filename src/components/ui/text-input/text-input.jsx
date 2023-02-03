import styled from "styled-components";

const TextInput = styled.input`
  display: flex;
  padding: 14px 12px;
  width: 100%;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorBackgroundPageBuy};
  font-size: 14px;

  ::placeholder {
    color: ${(props) => props.theme.colorBlack};
  }
`;

export default TextInput;
