import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: 0px 5px;

  .reject {
    color: black;
    background-color: white;
    border-color: #463a3ab8;
  }
  .authorize {
    color: white;
    background-color: #463a3ab8;
    border-color: #463a3ab8;
  }
  .add {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default ButtonWrapper;
