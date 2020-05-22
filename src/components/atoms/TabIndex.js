import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';

export const TabIndexSelected = props => {
    const { text } = props;
    return <Div selected>{text}</Div>;
}

export const TabIndexNotSelected = props => {
    const { text } = props;
    return <Div>{text}</Div>;
}

const Div = styled.div`
  padding: 24px 16px;
  margin: 0px;
  width: 100%;
  color: ${Styles.FONT_COLOR.DARK};
  text-align: center;
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 600;
  border-radius: ${Styles.BORDER_RADIUS} ${Styles.BORDER_RADIUS} 0px 0px;
  border-style: solid;
  border-color: ${Styles.BORDER_COLOR};
  border-width: ${props => props.selected ? '1px 1px 0 1px' : '0 0 1px 0px'};
`;