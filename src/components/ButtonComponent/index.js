import { Button } from "react-bootstrap";
import ButtonWrapper from "./ButtonStyle";

const CardButtonComponent = ({ handleClick, text, btnClsName }) => (
  <ButtonWrapper>
    <Button className={btnClsName} onClick={handleClick}>
      {text}
    </Button>
  </ButtonWrapper>
);

export default CardButtonComponent;
