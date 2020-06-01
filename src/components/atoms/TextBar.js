import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const TextBar = (props) => {
  const { setNewResearchWord, inText } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    setNewResearchWord(value);
  };

  return (
    <Input
      placeholder={inText}
      type="text"
      id="userInput"
      name="userInput"
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
  setNewResearchWord: PropTypes.func.isRequired,
  inText: PropTypes.string.isRequired,
};

export default TextBar;
