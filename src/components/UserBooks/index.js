import React from 'react';
import PropTypes from 'prop-types';
import { useLentBooks } from '../../hooks/useLentBooks';
import Books from '../../components/Books';

const UserBooks = ({ status = 'success', loans, header, noBooksMessage }) => {
  const books = useLentBooks(status, loans);
  return (
    <Books books={books} header={header} noBooksMessage={noBooksMessage} />
  );
};

UserBooks.props = {
  status: PropTypes.string,
  loans: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  noBooksMessage: PropTypes.string.isRequired,
};

export default UserBooks;
