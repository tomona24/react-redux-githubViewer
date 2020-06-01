import styled from 'styled-components';
import React from 'react';
import { Logo, MenuLabel } from '../atoms/Label';

const items = ['Issue', 'Pull Request'];

const MenuItems = () => {
  const menuItem = items.map((item) => {
    return <MenuLabel text={item} key={item} />;
  });
  return menuItem;
};

const MenuList = () => {
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

export default MenuList;
