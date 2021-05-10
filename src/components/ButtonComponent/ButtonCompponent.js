import styled, { css } from "styled-components";

const ButtonCompponent = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding-left: 15px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: normal;

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  .tertiaryLight {
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
  .secondary {
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

export default ButtonCompponent;
