import axios from 'axios/index';

export const isBrowser = () => typeof window !== 'undefined';

export const setJwt = token =>
  window.localStorage.setItem('token', JSON.stringify(token));

export const getJwt = () =>
  isBrowser() && window.localStorage.getItem('token')
    ? JSON.parse(window.localStorage.getItem('token'))
    : {};

export const getProfile = async () => {
  const token = getJwt();
  const { data } = await axios.get(
    `${process.env.REACT_APP_STRAPI_URL}/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
