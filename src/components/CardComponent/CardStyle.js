import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 1% !important;
  border: solid;
  border-color: darkgrey;
  width: 100%;
  @media (min-width: 1020px) {
    width: 70%;
  }
  label {
    font-weight: bold;
    font-size: 24px;
  }
  span {
    margin: 1%;
  }

  .iconGrp {
    float: right;
  }
`;