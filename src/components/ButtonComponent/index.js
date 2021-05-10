const AddButtonComponent = ({
  handleClick,
  text,
  btnClsName,
  testid,
  disableBtn,
}) => (
  <button
    className={btnClsName}
    onClick={handleClick}
    data-testid={testid}
    disabled={disableBtn}
  >
    {text}
  </button>
);

export default AddButtonComponent;
