import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const TextArea = (props) => {
  const { placeholder } = props;

  return (
    <Input placeholder={placeholder} type="text" id="userInput" name="userInput" />
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
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
