import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';

export const Label = props => {
    const { text } = props;
    return <H2>{text}</H2>;
}

const H2 = styled.h2`
  padding: 4px 16px;
  margin: 4px;
  color: #000;
  font-size: ${Styles.FONT_SIZE.LARGE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 800;
`;