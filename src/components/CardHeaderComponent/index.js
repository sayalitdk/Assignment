import CardButtonComponent from "../ButtonComponent";
import { printAmount } from "../../utils/format";
import { Printer, FileEarmarkBreak } from "react-bootstrap-icons";
import { CardHeaderWrapper } from "./CardHeaderStyle";

const CardHeaderComponent = (props) => {
  const reject = () => console.log("reject function called");
  const authorize = () => console.log("authorize function called");
  return (
    <CardHeaderWrapper data-testid={"cardHeaderCmp" + props.testid}>
      <div className="card-wrapper">
        <label>
          {props.reqName} {printAmount("GBP", props.amount)}
        </label>
        <Printer size={30} />
        <FileEarmarkBreak size={30} />
        <CardButtonComponent
          handleClick={reject}
          text="Reject"
          btnClsName="reject"
          testid={"reject" + props.testid}
        />
        <CardButtonComponent
          handleClick={authorize}
          text="Authorize"
          btnClsName="authorize"
          testid={"authorize" + props.testid}
        />
      </div>
      <span className="spanCls">
        {props.accountNo}, {props.accountName}
      </span>
    </CardHeaderWrapper>
  );
};
export default CardHeaderComponent;
