import { printAmount } from "../../utils/format";
import "font-awesome/css/font-awesome.min.css";
import {
  TitleWrapper,
  CardTitle,
  SubTitle,
  ButtonWrapper,
  IconContainer,
  CardHeaderContainer,
} from "./CardHeaderStyle";

import {
  SecondaryButton,
  TertiaryButton,
} from "../ButtonComponent/ButtonStyle";

const CardHeaderComponent = (props) => {
  const reject = () => console.log("reject function called");
  const authorize = () => console.log("authorize function called");
  return (
    <CardHeaderContainer data-testid={"cardHeaderCmp" + props.testid}>
      <TitleWrapper>
        <CardTitle>
          {props.reqName} {printAmount("GBP", props.amount)}
        </CardTitle>
        <SubTitle>
          {props.accountNo}, {props.accountName}
        </SubTitle>
      </TitleWrapper>
      <ButtonWrapper>
        <IconContainer>
          <span>
            <i className="fa fa-print fa-lg" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-file fa-lg" aria-hidden="true"></i>
          </span>
        </IconContainer>
        <TertiaryButton handleClick={reject} testid={"reject" + props.testid}>
          Reject
        </TertiaryButton>
        <SecondaryButton
          handleClick={authorize}
          testid={"authorise" + props.testid}
        >
          Authorise
        </SecondaryButton>
      </ButtonWrapper>
    </CardHeaderContainer>
  );
};
export default CardHeaderComponent;
