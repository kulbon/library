import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import FormattedMessage from 'react-intl/lib/src/components/message';
import { useAuth } from './../../hooks/useAuth';
import { StyledFlag } from './index.styled';
import { languages } from './../../constants/languages';

const Menu = ({ lang, changeLanguage, collapsed, setCollapsed }) => {
  const { user, isUserType, isLibrarianType } = useAuth();
  const toggleNavbar = () => setCollapsed(!collapsed);
  const isLoggedIn = !!user;
  return (
    <header className={'navbar'}>
      <Navbar
        expand="lg"
        collapseOnSelect
        className={'w-100 p-0 justify-content-end'}
      >
        <Navbar.Toggle
          onClick={toggleNavbar}
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={'justify-content-end'}
        >
          <Nav>
            <NavLink to="/" className={'nav-link'}>
              <FormattedMessage id={'menu.home'} key={'menu.home'}>
                {message => message}
              </FormattedMessage>
            </NavLink>
            {!isLoggedIn && (
              <NavLink to="/login" className={'nav-link'}>
                <FormattedMessage id={'menu.login'} key={'menu.login'}>
                  {message => message}
                </FormattedMessage>
              </NavLink>
            )}
            {isUserType && (
              <NavLink to="/account" className={'nav-link'}>
                <FormattedMessage id={'menu.account'} key={'menu.account'}>
                  {message => message}
                </FormattedMessage>
              </NavLink>
            )}
            {isLibrarianType && (
              <NavLink to="/users" className={'nav-link'}>
                <FormattedMessage id={'menu.users'} key={'menu.users'}>
                  {message => message}
                </FormattedMessage>
              </NavLink>
            )}
          </Nav>
          {languages.map(item => (
            <StyledFlag
              key={item.code}
              src={item.icon}
              alt={''}
              onClick={() => changeLanguage(item.code)}
              className={'mx-2'}
            />
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Menu.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

export default Menu;
