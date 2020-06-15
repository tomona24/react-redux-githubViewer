import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const NavItem = (props) => {
  const { text, onClick } = props;
  return <Item onClick={onClick}>{text}</Item>;
};

const Item = styled.div`
  display: block;
  cursor: pointer;
  padding: 10px 8px;
  text-decolation: none;
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

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem;
