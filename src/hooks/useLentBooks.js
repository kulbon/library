import { useMemo } from 'react';
import { useBooks } from './useBooks';

export const useLentBooks = (status, loans) => {
  const { status: bookStatus, data: books } = useBooks();
  return useMemo(() => {
    if (status !== 'success' || bookStatus !== 'success') {
      return null;
    }

    return loans.map(loan => {
      return {
        ...books.find(book => book.id === loan.book.id),
        loan_id: loan.id,
      };
    });
  }, [books, loans, status, bookStatus]);
};
