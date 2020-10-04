import React from 'react';
import PropTypes from 'prop-types';
import { Button as BButton } from 'react-bootstrap';
import FormattedMessage from 'react-intl/lib/src/components/message';

const Button = ({ message, onClick }) => (
  <BButton onClick={onClick}>
    <FormattedMessage id={message} />
  </BButton>
);

Button.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
