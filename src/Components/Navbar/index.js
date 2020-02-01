import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarWrapper } from './styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Link to="/"> Oompa Loompa's Crew</Link>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
