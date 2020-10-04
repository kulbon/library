import React from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay/';
import DotLoader from 'react-spinners/DotLoader';

const Loading = ({ children }) => {
  return (
    <LoadingOverlay active={true} spinner={<DotLoader />}>
      {children}
    </LoadingOverlay>
  );
};

Loading.propTypes = {
  children: PropTypes.any,
};

export default Loading;
