import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const Button = (props) => {
  const { text, onClick, type } = props;
  return (
    <ButtonDiv onClick={onClick} type={type}>
      {text}
    </ButtonDiv>
  );
};

// export const PrimaryButton = (props) => {
//   const { text, onClick } = props;
//   return (
//     <ButtonDiv onClick={onClick} primary>
//       {text}
//     </ButtonDiv>
//   );
// };
// export const SecondaryButton = (props) => {
//   const { text, onClick } = props;
//   return (
//     <ButtonDiv onClick={onClick} secondary>
//       {text}
//     </ButtonDiv>
//   );
// };

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
  color: ${(props) =>
    props.type === 'primary' || props.type === 'secondary' ? '#fff' : '#000'};
  background: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.type === 'primary'
      ? Styles.COLOR.PRIMARY
      : props.type === 'secondary'
      ? Styles.COLOR.SECONDARY
      : null};
  border-bottom: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.type === ' primary'
      ? '2px solid rgb(40, 167, 69)'
      : props.type === 'secondary'
      ? '2px solid rgb(175, 28, 42)'
      : null};
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
