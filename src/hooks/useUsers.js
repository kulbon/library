import { useQuery } from 'react-query';
import { getUsers } from '../services/users';
import { USERS } from '../constants/query';

export const useUsers = () => {
  return useQuery(USERS, getUsers);
};
