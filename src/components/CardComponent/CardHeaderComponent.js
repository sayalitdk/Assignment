import CardButtonComponent from "../ButtonComponent";
import { printAmount } from "../../utils/format";
import { Printer, FileEarmarkBreak } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
// import {CardHeaderStyle} from '../cardStyle';

const CardHeaderComponent = (props) => {
  const reject = () => console.log("reject function called");
  const authorize = () => console.log("authorize function called");
  return (
    <Container>
      <Row>
        <Col md={7} xs={12}>
          <label>
            {props.reqName} {printAmount("GBP", props.amount)}
          </label>
        </Col>
        <Col md={1} xs={2}>
          <Printer size={30} />
        </Col>
        <Col md={1} xs={2}>
          <FileEarmarkBreak size={30} />
        </Col>
        <Col md={1} xs={4}>
          <CardButtonComponent handleClick={reject} text="Reject" />
        </Col>
        <Col md={1} xs={4}>
          <CardButtonComponent handleClick={authorize} text="Authorize" />
        </Col>
      </Row>
      <Row>
        <Col>
          {props.accountNo}, {props.accountName}
        </Col>
      </Row>
    </Container>
  );
};
export default CardHeaderComponent;
