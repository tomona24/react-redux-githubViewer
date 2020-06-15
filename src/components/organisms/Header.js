import styled from 'styled-components';
import React, { useState } from 'react';
import Styles from '../Styles';
import MenuList from '../molecules/MenuList';
import NavList from '../molecules/NavList';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <Container>
      <MenuList />
      <Awesome onClick={changeToggle}>
        <i className="fas fa-bars" />
      </Awesome>
      <NavList toggle={toggle} onClick={closeMenu} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: ${Styles.BACKGROUND_COLOR.DARK};
  color: ${Styles.FONT_COLOR.WHITE};
`;

const Awesome = styled.div`
  display: block;
  padding: 16px;
  font-size: ${Styles.FONT_SIZE.MIDDLE};
`;

export default Header;
