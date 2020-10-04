import { getProfile } from '../services/auth';
import { useQuery } from 'react-query';

export const useMyProfile = () => {
  return useQuery('my-profile', getProfile);
};
