import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, MenuLabel } from '../atoms/Label';

const MenuItems = () => {
  return (
    <div>
      <Link to="/issue">
        <MenuLabel text="Issue" />
      </Link>
      <Link to="/pullRequest">
        <MenuLabel text="Pull Request" />
      </Link>
    </div>
  );
};

const MenuList = () => {
  return (
    <Div>
      <Link to="/">
        <Logo />
      </Link>
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
