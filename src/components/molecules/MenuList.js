import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import { Logo, MenuLabel } from '../atoms/Label';

const items = ['Issue', 'Pull Request'];

const MenuItems = () => {
  // const { navItem } = props
  const menuItem = items.map((item) => {
    return <MenuLabel text={item} key={item} />;
  });
  return menuItem;
};

export const MenuList = () => {
  return (
    <Div>
      <Logo />
      <MenuItems />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;
