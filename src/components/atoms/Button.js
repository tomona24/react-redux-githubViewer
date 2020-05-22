import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';


export const DefaultButton = (props) => {
  const { text } = props;
  return <ButtonDiv>{text}</ButtonDiv>;
};

export const PrimaryButton = (props) => {
  const { text } = props;
  return <ButtonDiv primary>{text}</ButtonDiv>;
};
export const SecondaryButton = (props) => {
  const { text } = props;
  return <ButtonDiv secondary>{text}</ButtonDiv>;
};



const ButtonDiv = styled.a`
  display: block;
  cursor: pointer;
  width: 120px;
  padding: 8px 16px;
  margin: 4px;
  text-align: center;
  font-family: ${Styles.FONT_FAMILY};
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-weight: 600;
  border-radius: ${Styles.BORDER_RADIUS};
  color: ${props => props.primary || props.secondary? "#fff" : "#000"};
  background: ${props => props.primary ? Styles.COLOR.PRIMARY: props.secondary? Styles.COLOR.SECONDARY : null};
  border-bottom: ${props => props.primary ? '2px solid rgb(40, 167, 69)' : props.secondary ? '2px solid rgb(175, 28, 42)' : null};
`;
