import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useMyLoans } from '../../hooks/useLoans';
import UserBooks from '../../components/UserBooks';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const UserAccount = () => {
  const { user, isLibrarianType } = useAuth();
  const { status, data: loans } = useMyLoans();
  const history = useHistory();
  const isLoggedIn = !!user;

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    } else if (isLibrarianType) {
      history.push('/users');
    }
  }, [history, isLoggedIn, isLibrarianType]);

  return (
    <Row>
      <Col xs={12}>
        <UserBooks
          loans={loans}
          status={status}
          header={'header.yours.currently.borrowed'}
          noBooksMessage={'header.not.borrowing'}
        />
      </Col>
    </Row>
  );
};

export default UserAccount;
