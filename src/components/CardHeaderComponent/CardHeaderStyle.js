import styled from "styled-components";

export const TitleWrapper = styled.div`
  width: 50%;
  margin-top: 17px;
  margin-right: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #252525;
  margin-bottom: 0px;
`;

export const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #252525;
  margin-top: 11px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const IconContainer = styled.div`
  display: flex;
  span {
    padding-left: 20px;
    padding-right: 20px;
  }
  span:not(:last-child) {
    border-right: 1px solid #252525;
  }
  svg {
    font-size: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;
