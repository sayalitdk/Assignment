import styled from "styled-components";

export const CardFooterWraper = styled.div`
  display: flex;
  color: #252525;

  i {
    margin-bottom: 18px;
    margin-right: 8px;
    color: #252525;
    font-size: 15px;
  }
  div:not(:last-child) {
    margin-right: 20px;
  }
  span {
    font-weight: 500;
    text-decoration: underline;
  }
`;
