import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavItem from '../atoms/NavItem';

const style = {
  textDecoration: 'none',
};

const NavItems = (props) => {
  const { onClick } = props;
  return (
    <div>
      <Link to="/react-redux-githubViewer/" style={style}>
        <NavItem text="Top" key="Top" onClick={onClick} />
      </Link>
      <Link to="/react-redux-githubViewer/profile" style={style}>
        <NavItem text="Your Profile" key="Your Profile" onClick={onClick} />
      </Link>
      <Link to="/react-redux-githubViewer/issue" style={style}>
        <NavItem text="Issue" key="Issue" onClick={onClick} />
      </Link>
      <Link to="/react-redux-githubViewer/pullRequest" style={style}>
        <NavItem text="Pull Request" key="Pull Request" onClick={onClick} />
      </Link>
    </div>
  );
};

const NavList = (props) => {
  const { toggle, onClick } = props;
  if (toggle) {
    return (
      <Div>
        <NavItems onClick={onClick} />
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
  z-index: 500;
`;

NavList.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

NavItems.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavList;
