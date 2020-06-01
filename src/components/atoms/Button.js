import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const DefaultButton = (props) => {
  const { text, onClick } = props;
  return <ButtonDiv onClick={onClick}>{text}</ButtonDiv>;
};

export const PrimaryButton = (props) => {
  const { text, onClick } = props;
  return (
    <ButtonDiv onClick={onClick} primary>
      {text}
    </ButtonDiv>
  );
};
export const SecondaryButton = (props) => {
  const { text, onClick } = props;
  return (
    <ButtonDiv onClick={onClick} secondary>
      {text}
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  display: block;
  cursor: pointer;
  min-width: 70px;
  padding: 6px 16px;
  margin: 6px 4px;
  text-align: center;
  font-family: ${Styles.FONT_FAMILY};
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-weight: 600;
  border-radius: ${Styles.BORDER_RADIUS};
  color: ${(props) => (props.primary || props.secondary ? '#fff' : '#000')};
  background: ${(props) =>
    props.primary
      ? Styles.COLOR.PRIMARY
      : props.secondary
      ? Styles.COLOR.SECONDARY
      : null};
  border-bottom: ${(props) =>
    props.primary
      ? '2px solid rgb(40, 167, 69)'
      : props.secondary
      ? '2px solid rgb(175, 28, 42)'
      : null};
`;

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
