import { Button } from "react-bootstrap";
import ButtonWrapper from "./ButtonStyle";

const CardButtonComponent = ({ handleClick, text, btnClsName, testid }) => (
  <ButtonWrapper>
    <Button className={btnClsName} onClick={handleClick} data-testid={testid}>
      {text}
    </Button>
  </ButtonWrapper>
);

export default CardButtonComponent;
