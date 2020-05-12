import React from 'react';

const InputField = (props) => {
  const { value, placeholder, onChange} = props;
    return (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
  )
}

InputField.defaultProps = {
  onChange: () => {},
  placeholder: 'Enter Value'
};

export default InputField;