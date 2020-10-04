import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu/';
import Logged from '../components/Logged/';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  flex: 1 1 auto;
  padding-bottom: 15px;
  padding-top: 40px;
  background: #fff;
`;

const Layout = ({
  lang,
  changeLanguage,
  children,
  collapsed,
  setCollapsed,
}) => {
  return (
    <>
      <Menu
        lang={lang}
        changeLanguage={lang => changeLanguage(lang)}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Logged />
      <StyledContainer fluid>{children}</StyledContainer>
    </>
  );
};

Layout.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.any,
  changeLanguage: PropTypes.func,
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

export default Layout;
