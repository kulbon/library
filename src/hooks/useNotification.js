import { useCallback } from 'react';
import { store } from 'react-notifications-component';
import { useIntl } from 'react-intl';

export const useNotification = () => {
  const intl = useIntl();
  return useCallback(
    (type, title, message) => {
      store.addNotification({
        message: intl.formatMessage({ id: message }),
        type: type,
        insert: 'left',
        container: 'top-left',
        animationIn: ['animate__bounceIn'],
        animationOut: ['animate__bounceOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    },
    [intl]
  );
};
