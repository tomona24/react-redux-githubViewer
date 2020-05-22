import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';


export const TableCell = props => {
    const { text } = props;
    return <Div>{text}</Div>;
}

export const TableCheckBoxCell = props => {
  return <Div><input type="checkbox" /></Div>;
}


const Div = styled.div`
  display: block;
  margin: 1px;
  padding: 8px 4px;
  color: #000;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-family: ${Styles.FONT_FAMILY};
  border-bottom: 1px solid ${Styles.BORDER_COLOR};
`;