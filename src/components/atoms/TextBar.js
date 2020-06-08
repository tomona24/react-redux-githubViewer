import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const TextBar = (props) => {
  const { getTheValue, placeholder, value } = props;

  const handleChange = (event) => {
    const { value: userInput } = event.target;
    getTheValue(userInput);
  };

  return (
    <Input
      placeholder={placeholder}
      type="text"
      name="userInput"
      value={value}
      onChange={handleChange}
    />
  );
};

const Input = styled.input`
  margin: 4px 16px;
  padding: 8px;
  color: #000;
  width: 100%;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-family: ${Styles.FONT_FAMILY};
  border-radius: ${Styles.BORDER_RADIUS};
  border: 1px solid ${Styles.BORDER_COLOR};
`;

TextBar.propTypes = {
  value: PropTypes.string.isRequired,
  getTheValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextBar;
