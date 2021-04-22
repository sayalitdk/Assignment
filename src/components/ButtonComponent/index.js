import { Button } from "react-bootstrap";
import ButtonWrapper from "./ButtonStyle";

const CardButtonComponent = ({ handleClick, text }) => (
  <ButtonWrapper className="pull-right">
    <Button
      className={text.replaceAll(" ", "").toLowerCase()}
      onClick={handleClick}
    >
      {text}
    </Button>
  </ButtonWrapper>
);

export default CardButtonComponent;
