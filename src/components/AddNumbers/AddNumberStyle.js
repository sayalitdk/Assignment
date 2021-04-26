import styled from "styled-components";

const AddNumberWrapper = styled.div`
  margin: 1% !important;
  border: solid;
  border-color: darkgrey;
  width: 30%;
  .errorMsg {
    color: red;
  }
  .numInput {
    width: 30%;
    margin: 8% 4% 4% 4%;
  }
  .add {
    width: 40%;
  }
  .resultCls {
    margin: 3% 0% 8%;
    font-size: larger;
  }
  .numInputDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default AddNumberWrapper;
