import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const TableCell = (props) => {
  const { text, width } = props;
  return <Div width={width}>{text}</Div>;
};

export const TableCheckBoxCell = (props) => {
  const { onClick, index, width } = props;
  const [isChecked, setIsChecked] = useState(false);
  // const checked = wholeChecked ? true : isChecked;
  const onChecked = () => {
    // if(index != null) {
    onClick(index, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <Div onClick={onChecked} width={width}>
      <input type="checkbox" checked={isChecked} />
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
  index: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
};
