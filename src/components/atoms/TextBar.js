import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';

export const TextBar = (props) => {
  return <Input placeholder="issue名で検索" />;
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
