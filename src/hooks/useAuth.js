import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios/index';
import { setJwt } from '../services/auth';
import { useMyProfile } from './useMyProfile';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { error, data: myProfile } = useMyProfile();
  const isUserType = !!user && user.role.type !== 'librarian';
  const isLibrarianType = !!user && user.role.type === 'librarian';

  const signIn = async (username, password) => {
    await axios
      .post(`${process.env.REACT_APP_STRAPI_URL}/auth/local`, {
        identifier: username,
        password: password,
      })
      .then(({ data }) => {
        updateProfile(data);
        return { data };
      });
  };

  const signOut = callback => {
    setUser(false);
    setJwt(null);
    callback();
  };

  const updateProfile = data => {
    setUser(data.user);
    setJwt(data.jwt);
  };

  useEffect(() => {
    if (myProfile) {
      setUser(myProfile);
      setLoading(false);
    }
  }, [myProfile]);

  useEffect(() => {
    if (error?.response.status === 401) {
      setUser(false);
      setLoading(false);
    }
  }, [error]);

  return {
    user,
    isUserType,
    isLibrarianType,
    isLoading,
    signIn,
    signOut,
    updateProfile,
  };
}
