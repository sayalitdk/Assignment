const InputBox = ({ handleClick, typeValue, inputValue, className, id }) => (
  <input
    data-testid={id}
    className={className}
    type={typeValue}
    value={inputValue}
    onChange={(e) => handleClick(Number(e.target.value))}
  />
);

export default InputBox;
