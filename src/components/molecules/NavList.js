import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';
import NavItem from '../atoms/NavItem';

const items = ['Top', 'Your Profile', 'Issue', 'Pull Request'];

const NavItems = () => {
  const navItem = items.map((item) => {
    return <NavItem text={item} key={item} />;
  });
  return navItem;
};

const NavList = (props) => {
  const { toggle } = props;
  if (toggle) {
    return (
      <Div>
        <NavItems />
      </Div>
    );
  }
  return (
    <Div hidden>
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

NavList.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default NavList;
