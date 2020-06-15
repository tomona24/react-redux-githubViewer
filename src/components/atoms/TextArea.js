import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const TextArea = (props) => {
  const { getTheValue, placeholder, text } = props;
  const [userInput, setUserInput] = useState(text);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserInput(value);
    getTheValue(value);
  };

  return (
    <Input
      placeholder={placeholder}
      id="userInput"
      name="userInput"
      value={userInput}
      onChange={handleChange}
    />
  );
};

const Input = styled.textarea`
  margin: 4px 16px;
  padding: 8px;
  color: #000;
  width: 100%;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-family: ${Styles.FONT_FAMILY};
  border-radius: ${Styles.BORDER_RADIUS};
  border: 1px solid ${Styles.BORDER_COLOR};
`;

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  getTheValue: PropTypes.func.isRequired,
};

export default TextArea;
