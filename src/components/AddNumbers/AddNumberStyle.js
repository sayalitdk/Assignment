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
    margin: 8% 4% 0% 0%;
  }
  .add {
    margin: 8% 0% 2% 0%;
    width: 40%;
  }
  .resultCls {
    margin: 3% 0% 8%;
    font-size: larger;
  }
`;

export default AddNumberWrapper;
