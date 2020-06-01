import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';

const NavItem = (props) => {
  const { text } = props;
  return <Item>{text}</Item>;
};

const Item = styled.a`
  display: block;
  cursor: pointer;
  padding: 10px 8px;
  margin: 0px;
  text-align: left;
  font-family: ${Styles.FONT_FAMILY};
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-weight: 600;
  color: ${Styles.FONT_COLOR.DARK};
  background: #fff;
  :hover {
    background: ${Styles.BACKGROUND_COLOR.BLUE};
    color: ${Styles.FONT_COLOR.WHITE};
  }
`;

export default NavItem;
