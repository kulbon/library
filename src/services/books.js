import axios from 'axios/index';

export const getBooks = async () => {
  const { data } = await axios(`${process.env.REACT_APP_STRAPI_URL}/books`);
  return data;
};
