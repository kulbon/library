import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryCache } from 'react-query';
import { addLoan, returnLoan } from '../../services/loans';
import { useNotification } from '../../hooks/useNotification';
import { MY_LOANS, LOANS } from '../../constants/query';
import Book from '../Book';
import Row from 'react-bootstrap/esm/Row';
import FormattedMessage from 'react-intl/lib/src/components/message';

const Books = ({ books, header, noBooksMessage }) => {
  const queryCache = useQueryCache();
  const notify = useNotification();
  const [mutateReturn] = useMutation(returnLoan);
  const [mutateLoan] = useMutation(addLoan);

  const handleLoan = async (book, user) => {
    try {
      await mutateLoan(
        { book, user },
        {
          onSuccess: () => {
            queryCache.invalidateQueries(LOANS);
          },
        }
      );
      notify('success', '', 'message.you.borrowed.a.book');
    } catch (error) {
      console.log(error);
    }
  };

  const handleReturn = async loanId => {
    try {
      await mutateReturn(loanId, {
        onSuccess: () => {
          queryCache.invalidateQueries(MY_LOANS);
        },
      });
      notify('success', '', 'message.you.returned.a.book');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>
        <FormattedMessage id={header} />
      </h3>
      <div>
        {books?.length > 0 ? (
          <Row>
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                handleLoan={handleLoan}
                handleReturn={handleReturn}
              />
            ))}
          </Row>
        ) : (
          noBooksMessage && (
            <h4>
              <FormattedMessage id={noBooksMessage} />
            </h4>
          )
        )}
      </div>
    </>
  );
};

Books.props = {
  books: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  noBooksMessage: PropTypes.string.isRequired,
};

export default Books;
