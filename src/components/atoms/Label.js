import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const Label = (props) => {
  const { text } = props;
  return <H2>{text}</H2>;
};

export const Logo = () => {
  return <H1 href="">Github Viewer</H1>;
};

export const MenuLabel = (props) => {
  const { text } = props;
  return <H3 href="">{text}</H3>;
};

const H2 = styled.h2`
  padding: 4px 0px;
  margin: 4px;
  color: #000;
  font-size: ${Styles.FONT_SIZE.LARGE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 700;
`;

const H1 = styled.a`
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.HEADER}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 800;
`;

const H3 = styled.a`
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 600;
`;

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

MenuLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
