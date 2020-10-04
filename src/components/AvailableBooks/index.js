import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLoans } from '../../hooks/useLoans';
import Books from '../../components/Books';

const AvailabeBooks = ({ books }) => {
  const { data: loans } = useLoans();

  const availableBooks = useMemo(() => {
    const _ids = loans ? loans.map(loan => loan.book.id) : [];
    return books.filter(book => !_ids.includes(book.id));
  }, [loans, books]);

  return (
    <Books
      books={availableBooks}
      header={'header.available.books'}
      noBooksMessage={''}
    />
  );
};

AvailabeBooks.props = {
  books: PropTypes.array,
};

export default AvailabeBooks;
