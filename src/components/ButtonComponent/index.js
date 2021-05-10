const CardButtonComponent = ({
  handleClick,
  text,
  btnClsName,
  testid,
  size,
}) => (
  <button className={btnClsName} onClick={handleClick} data-testid={testid}>
    {text}
  </button>
);

export default CardButtonComponent;
