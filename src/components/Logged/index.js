import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { useNotification } from './../../hooks/useNotification';
import FormattedMessage from 'react-intl/lib/src/components/message';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { StyledInputGroup, StyledButtonGroup } from './index.styled';

const Logged = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();
  const notify = useNotification();
  const isLogged = !!user;

  const handleSignOut = e => {
    e.preventDefault();
    signOut(() => {
      history.push('/');
      notify('success', '', 'Auth.form.success.logged.out');
    });
  };

  return (
    isLogged && (
      <Col xs={12}>
        <Row>
          <Col className={'text-left'}>
            {user && (
              <h1>
                <FormattedMessage id={'text.welcome'} /> {user.username}!
              </h1>
            )}
          </Col>
          <div className={'text-right pr-3'}>
            <InputGroup
              className={'justify-content-end'}
              onClick={e => handleSignOut(e)}
            >
              <InputGroup.Prepend>
                <StyledInputGroup>←</StyledInputGroup>
              </InputGroup.Prepend>
              <StyledButtonGroup type="submit">
                <FormattedMessage id={'button.logout'} />
              </StyledButtonGroup>
            </InputGroup>
          </div>
        </Row>
      </Col>
    )
  );
};

export default Logged;
