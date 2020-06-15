import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const TableCell = (props) => {
  const { text, width } = props;
  return <Div width={width}>{text}</Div>;
};

export const TableCheckBoxCell = (props) => {
  const { onClick, checked, width } = props;
  return (
    <Div onClick={onClick} width={width}>
      <input type="checkbox" checked={checked} />
    </Div>
  );
};

const Div = styled.div`
  display: block;
  margin: 1px;
  padding: 8px 4px;
  width: ${(props) => (props.width ? props.width : '120px')};
  color: #000;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-family: ${Styles.FONT_FAMILY};
  border-bottom: 1px solid ${Styles.BORDER_COLOR};
`;

TableCell.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

TableCheckBoxCell.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
};
