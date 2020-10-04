import { useState, useEffect, useCallback } from 'react';
import localePL from '../locale/pl_PL/ui.json';
import localeEN from '../locale/en_US/ui.json';

export const useLocale = () => {
  const [locale, setLocale] = useState('en');
  const [localeConfig, setLocaleConfig] = useState(localePL);

  const changeLocale = useCallback(lang => {
    let localeConfig;
    switch (lang) {
      case 'pl':
        localeConfig = localePL;
        break;
      case 'en':
        localeConfig = localeEN;
        break;
      default:
        localeConfig = localePL;
        break;
    }
    setLocaleConfig(localeConfig);
    setLocale(lang);
  }, []);

  useEffect(() => {
    changeLocale(locale);
  }, [changeLocale, locale]);

  return {
    locale,
    localeConfig,
    changeLocale,
  };
};
