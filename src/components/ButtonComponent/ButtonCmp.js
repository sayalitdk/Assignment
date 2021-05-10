import styled, { css } from "styled-components";

const ButtonCmp = styled.div`
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
`;

export default ButtonCmp;
