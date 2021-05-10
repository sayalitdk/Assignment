import styled, { css } from "styled-components";
import ButtonCmp from "./ButtonCmp";

const TertiaryButton = styled.div`
  button {
    ${ButtonCmp}
    color: black;
    background-color: transparent;
    border: 1px solid black;
    padding: 0px 20px 0px 20px;
    height: 40px;
    ${(props) =>
      props.size === "true" &&
      css`
        height: 30px;
        padding: 0px 10px 0px 10px;
      `}
    &:hover {
      background-color: rgba(0, 0, 0, 0.14);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.3);
    }
    &:disabled {
      background-color: transparent;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default TertiaryButton;
