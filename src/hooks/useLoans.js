import { useQuery } from 'react-query';
import { getLoans, getMyLoans } from '../services/loans';
import { MY_LOANS, LOANS } from '../constants/query';

export const useLoans = () => {
  return useQuery(LOANS, getLoans);
};

export const useMyLoans = () => {
  return useQuery(MY_LOANS, getMyLoans);
};
