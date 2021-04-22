const InputBox = ({ handleClick, typeValue, inputValue, className }) => (
  <input
    className={className}
    type={typeValue}
    value={inputValue}
    onChange={(e) => handleClick(Number(e.target.value))}
  />
);

export default InputBox;
