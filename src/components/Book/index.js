import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import Button from '../Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import { StyledGenres, StyledGenre } from './index.styled';

const Book = ({ book, handleReturn, handleLoan }) => {
  const { user, isUserType } = useAuth();

  return (
    book && (
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card>
          <Card.Img src={book.image.url} alt="" />
          <Card.Header>
            {book.title}
            <br />
            {book.author.name}
          </Card.Header>
          <Card.Body className={'p-2'}>
            <StyledGenres>
              {book.genres.map(genre => (
                <StyledGenre variant="primary" key={genre.id}>
                  {genre.name}
                </StyledGenre>
              ))}
            </StyledGenres>
            {isUserType &&
              (book.loan_id ? (
                <Button
                  onClick={() => handleReturn(book.loan_id)}
                  message={'button.return.this.book'}
                />
              ) : (
                <Button
                  onClick={() => handleLoan(book.id, user.id)}
                  message={'button.loan.this.book'}
                />
              ))}
          </Card.Body>
        </Card>
      </Col>
    )
  );
};

Book.propTypes = {
  book: PropTypes.object,
  handleReturn: PropTypes.func,
  handleLoan: PropTypes.func,
};

export default Book;
