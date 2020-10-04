import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Users from '../../components/Users';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const LibrarianAccount = () => {
  const { user, isUserType } = useAuth();
  const history = useHistory();
  const isLoggedIn = !!user;

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    } else if (isUserType) {
      history.push('/account');
    }
  }, [history, isLoggedIn, isUserType]);

  return (
    <Row>
      <Col xs={12}>
        <Users />
      </Col>
    </Row>
  );
};

export default LibrarianAccount;
