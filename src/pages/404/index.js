import React from 'react';
import FormattedMessage from 'react-intl/lib/src/components/message';

function NotFound() {
  return (
    <FormattedMessage id={'message.notFound'} key={'message.notFound'}>
      {message => <h2>{message}</h2>}
    </FormattedMessage>
  );
}

export default NotFound;
