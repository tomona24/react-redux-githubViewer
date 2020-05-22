import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import { NavItem } from '../atoms/NavItem';

const items = ['Top', 'Your Profile', 'Issue', 'Pull Request'];
const toggle = true;

const NavItems = (props) => {
  // const { navItem } = props
  const navItem = items.map((item, index) => {
    return <NavItem text={item} key={index} />;
  });
  return navItem;
};

export const NavList = (props) => {
  return (
    <Div>
      <NavItems />
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  right: 8px;
  top: 50px;
  padding: 8px 0px;
  width: 200px;
  background: #fff;
  box-shadow: 3px 3px 3px #eee;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;
