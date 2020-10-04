import axios from 'axios/index';
import { getJwt } from './auth';

export const getUsers = async () => {
  const token = getJwt();
  const { data } = await axios.get(
    `${process.env.REACT_APP_STRAPI_URL}/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
