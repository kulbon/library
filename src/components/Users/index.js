import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import Loading from '../../components/Loading';
import User from '../User';

const Users = () => {
  const { status, data: users } = useUsers();

  if (status !== 'success') {
    return <Loading />;
  }
  const getUsers = users =>
    users.filter(user => user.role.type !== 'librarian');

  const renderUsers = users =>
    users.map((user, index) => (
      <User key={user.id} user={user} index={index} />
    ));

  return <>{users && renderUsers(getUsers(users))}</>;
};

Users.props = {};

export default Users;
