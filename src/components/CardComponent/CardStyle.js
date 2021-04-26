import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 1% !important;
  padding: 1%;
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

  .wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default CardWrapper;
