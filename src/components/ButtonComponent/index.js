import { Button } from "react-bootstrap";
import ButtonWrapper from "./ButtonStyle";

const CardButtonComponent = ({ handleClick, text }) => (
  <ButtonWrapper>
    <Button
      className={text.replaceAll(" ", "").toLowerCase()}
      onClick={handleClick}
    >
      {text}
    </Button>
  </ButtonWrapper>
);

export default CardButtonComponent;
