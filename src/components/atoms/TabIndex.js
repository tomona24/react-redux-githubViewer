import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const style = {
  textDecoration: 'none',
  color: '#000',
};

const TabIndex = (props) => {
  const { text, selected, to, changeSelected } = props;

  return (
    <Div selected={selected}>
      <Link to={to} onClick={changeSelected} style={style}>
        {text}
      </Link>
    </Div>
  );
};

const Div = styled.a`
  padding: 16px;
  margin: 20px 0px;
  width: 100%;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.DARK};
  text-align: center;
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 600;
  border-radius: ${Styles.BORDER_RADIUS} ${Styles.BORDER_RADIUS} 0px 0px;
  border-style: solid;
  border-color: ${Styles.BORDER_COLOR};
  border-width: ${(props) =>
    props.selected ? '1px 1px 0 1px' : '0 0 1px 0px'};
`;

TabIndex.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
};

export default TabIndex;
