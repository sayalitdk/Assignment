import styled from "styled-components";

// export const CardWrapper = styled.div`
//   margin: 1% !important;
//   padding: 1%;
//   border: solid;
//   border-color: darkgrey;
//   width: 100%;
//   @media (min-width: 1020px) {
//     width: 70%;
//   }
//   label {
//     font-weight: bold;
//     font-size: 24px;
//   }
//   span {
//     margin: 1%;
//   }

//   .iconGrp {
//     float: right;
//   }

//   .wrapper {
//     font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//     padding: 15px 20px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .card-body {
//     display: flex;
//     justify-content: space-between;
//   }
// `;

// export default CardWrapper;

export const CardWrapper = styled.div`
  border-top: 0.1rem solid #252525;
  border-bottom: 0.1rem solid #252525;
  width: 780px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const CardBodyContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
`;

export const FullDetailContainer = styled.div`
  display: flex;
  align-items: flex-end;
  a {
    color: black;
  }
`;
