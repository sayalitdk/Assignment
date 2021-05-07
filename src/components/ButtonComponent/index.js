import ButtonWrapper from "./ButtonStyle";

const CardButtonComponent = ({
  handleClick,
  text,
  btnClsName,
  testid,
  size,
}) => (
  <ButtonWrapper size>
    <button className={btnClsName} onClick={handleClick} data-testid={testid}>
      {text}
    </button>
  </ButtonWrapper>
);

export default CardButtonComponent;
