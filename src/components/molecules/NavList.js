import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavItem from '../atoms/NavItem';

const NavItems = () => {
  return (
    <div>
      <Link to="/">
        <NavItem text="Top" key="Top" />
      </Link>
      <Link to="/profile">
        <NavItem text="Your Profile" key="Your Profile" />
      </Link>
      <Link to="/issue">
        <NavItem text="Issue" key="Issue" />
      </Link>
      <Link to="/pullRequest">
        <NavItem text="Pull Request" key="Pull Request" />
      </Link>
    </div>
  );
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
