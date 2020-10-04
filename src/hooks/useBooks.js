import { useQuery } from 'react-query';
import { getBooks } from '../services/books';
import { BOOKS } from '../constants/query';

export const useBooks = () => {
  return useQuery(BOOKS, getBooks);
};
