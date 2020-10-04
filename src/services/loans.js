import axios from 'axios/index';
import { getJwt } from './auth';

export const getLoans = async () => {
  const token = getJwt();
  const { data } = await await axios.get(
    `${process.env.REACT_APP_STRAPI_URL}/loans`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const getMyLoans = async () => {
  const token = getJwt();
  const { data } = await axios.get(
    `${process.env.REACT_APP_STRAPI_URL}/loans/my`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data ? data.data : [];
};

export const addLoan = async ({ book, user }) => {
  const token = getJwt();
  return await axios.post(
    `${process.env.REACT_APP_STRAPI_URL}/loans`,
    {
      book,
      user,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const returnLoan = async loanId => {
  const token = getJwt();
  return await axios.delete(
    `${process.env.REACT_APP_STRAPI_URL}/loans/${loanId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
