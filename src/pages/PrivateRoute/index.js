import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const auth = useAuth();
  const history = useHistory();
  if (!auth.isLoading && !auth.user && location.pathname !== `/login`) {
    history.push('/login');
    return null;
  }
  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
};

export default PrivateRoute;
