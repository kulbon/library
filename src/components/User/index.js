import React from 'react';
import { useLoans } from '../../hooks/useLoans';
import UserBooks from '../../components/UserBooks';
import Accordion from 'react-bootstrap/esm/Accordion';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { FormattedMessage } from 'react-intl';

const User = ({ user, index, header, noBooks }) => {
  const { status, data: loans } = useLoans();

  const getUserLoans = (loans, user) =>
    loans ? loans.filter(loan => loan.user.id === user.id) : [];

  const userLoans = getUserLoans(loans, user);
  return (
    <Accordion>
      <div
        className={`row align-items-center justify-content-between ${
          index % 2 && 'bg-secondary'
        }`}
      >
        <Col xs={12} sm={6} md={'auto'} as={'h2'} className={'py-2'}>
          {user.name}
        </Col>
        <Col xs={12} sm={6} md={'auto'} className={'py-2'}>
          {user.address}
        </Col>
        <Col xs={12} sm={6} md={'auto'} className={'py-2'}>
          {user.email}
        </Col>
        <Col xs={12} sm={6} md={'auto'} className={'py-2'}>
          {user.phone}
        </Col>
        <Col xs={12} lg={'auto'} className={'py-2'}>
          <Accordion.Toggle as={Button} eventKey={user.id}>
            <FormattedMessage id={'button.show.books'} />
          </Accordion.Toggle>
        </Col>
      </div>
      <Accordion.Collapse key={user.id} eventKey={user.id} className={'my-3'}>
        {userLoans && (
          <UserBooks
            status={status}
            loans={userLoans}
            header={'header.is.currently.borrowing'}
            noBooksMessage={'header.not.borrowing.anything'}
          />
        )}
      </Accordion.Collapse>
    </Accordion>
  );
};

User.props = {};

export default User;
