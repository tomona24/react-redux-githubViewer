import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, MenuLabel } from '../atoms/Label';

const style = {
  textDecoration: 'none',
};

const MenuItems = () => {
  return (
    <div>
      <Link to="/issue" style={style}>
        <MenuLabel text="Issue" />
      </Link>
      <Link to="/pullRequest" style={style}>
        <MenuLabel text="Pull Request" />
      </Link>
    </div>
  );
};

const MenuList = () => {
  return (
    <Div>
      <Link to="/" style={style}>
        <Logo />
      </Link>
      <MenuItems />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
`;

export default MenuList;
