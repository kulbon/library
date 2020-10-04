import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../../components/Loading';
import Books from '../../components/Books';
import AvailableBooks from '../../components/AvailableBooks';

const Home = () => {
  const { status: bookStatus, data: books } = useBooks();
  const auth = useAuth();
  const isLogged = !!auth.user;

  if (bookStatus !== 'success') {
    return <Loading />;
  }

  return isLogged ? (
    <AvailableBooks books={books} />
  ) : (
    <Books books={books} header={'header.all.books'} noBooksMessage={''} />
  );
};

Home.props = {};

export default Home;
