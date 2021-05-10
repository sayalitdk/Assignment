import styled, { css } from "styled-components";
import ButtonCmp from "./ButtonCmp";

const TertiaryButton = styled.button`
  ${ButtonCmp}
  border: 1px solid black;
  padding: 0px 20px 0px 20px;
  height: 40px;
  ${(props) =>
    props.smallSize &&
    css`
      height: 30px;
      padding: 0px 10px 0px 10px;
    `}
  ${(props) => (props.dark ? TertiaryDarkStyle : TertiaryLightStyle)}
`;

export const TertiaryLightStyle = css`
  color: #252525;
  background-color: #fff;
  border: 1px solid #252525;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
  &:disabled {
    color: #252525;
    background-color: #fff;
    border: 1px solid #252525;
    opacity: 0.5;
  }
`;

export const TertiaryDarkStyle = css`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
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
`;

export default TertiaryButton;
