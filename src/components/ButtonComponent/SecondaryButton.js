import styled, { css } from "styled-components";
import ButtonCmp from "./ButtonCmp";

const SecondaryButton = styled.div`
  button {
    ${ButtonCmp}
    color: #ffffff;
    background-color: #4d6474;
    border: none;
    padding: 0px 20px 0px 20px;
    height: 40px;
    ${(props) =>
      props.size === "true" &&
      css`
        height: 30px;
        padding: 0px 10px 0px 10px;
      `}
    &:hover {
      background-color: #3e505c;
    }
    &:active {
      background-color: #31404a;
    }
    &:disabled {
      color: #252525;
      background-color: #fff;
      border: 1px solid #252525;
      opacity: 0.5;
    }
  }
`;

export default SecondaryButton;
