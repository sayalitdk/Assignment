import styled, { css } from "styled-components";
import ButtonCmp from "./ButtonCmp";

const PrimaryButton = styled.button`
  ${ButtonCmp}
  color: #FFFFFF;
  background-color: #db0011;
  border: none;
  padding: 0px 20px 0px 20px;
  height: 40px;
  ${(props) =>
    props.smallSize &&
    css`
      height: 30px;
      padding: 0px 10px 0px 10px;
    `}
  &:hover {
    background-color: #a4000d;
  }
  &:active {
    background-color: #83000a;
  }
  &:disabled {
    color: #252525;
    background-color: #fff;
    border: 1px solid #252525;
    opacity: 0.5;
  }
`;

export default PrimaryButton;
