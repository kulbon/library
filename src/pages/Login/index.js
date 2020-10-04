import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { ReactComponent as Lock } from '../../assets/lock.svg';
import { ReactComponent as Eye } from '../../assets/eye.svg';
import { FlexDiv, LoginBox, StyledInputGroup } from './index.styled';

const Login = () => {
  const [type, setType] = useState('password');
  const loginRef = useRef();
  const passwordRef = useRef();
  const intl = useIntl();
  const notify = useNotification();

  const { signIn, isLibrarianType, isUserType } = useAuth();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signIn(loginRef.current.value, passwordRef.current.value);
      notify('success', '', 'Auth.form.success.logged.in');
      history.push('/account');
    } catch (e) {
      notify('danger', 'warning', e.response.data.message[0].messages[0].id);
    }
  };

  useEffect(() => {
    if (isUserType) {
      history.push('/account');
    } else if (isLibrarianType) {
      history.push('/users');
    }
  }, [isUserType, history, isLibrarianType]);

  return (
    <FlexDiv>
      <LoginBox>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend className={'text-center'}>
              <h1>
                <FormattedMessage id={'header.login'} key={'header.login'} />
              </h1>
            </legend>
            <Form.Group as={Row} className={'align-items-center'}>
              <InputGroup as={Col} xs={12}>
                <Form.Control
                  as="input"
                  ref={loginRef}
                  type="text"
                  name="login"
                  id="login"
                  className={'form-control'}
                  autoComplete={'login'}
                  placeholder={intl.formatMessage({ id: 'placeholder.login' })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className={'align-items-center'}>
              <InputGroup as={Col} xs={12}>
                <InputGroup.Prepend>
                  <StyledInputGroup>
                    <Lock />
                  </StyledInputGroup>
                </InputGroup.Prepend>
                <Form.Control
                  as="input"
                  ref={passwordRef}
                  type={type}
                  name="password"
                  id="password"
                  className={'form-control'}
                  autoComplete={'current-password'}
                  placeholder={intl.formatMessage({
                    id: 'placeholder.password',
                  })}
                />
                <InputGroup.Append>
                  <StyledInputGroup>
                    <Eye
                      onMouseEnter={() => setType('text')}
                      onMouseLeave={() => setType('password')}
                    />
                  </StyledInputGroup>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </fieldset>
          <div className="d-flex justify-content-between">
            <FormattedMessage id={'button.login'} key={'button.login'}>
              {message => <Button type="submit">{message}</Button>}
            </FormattedMessage>
          </div>
        </Form>
      </LoginBox>
    </FlexDiv>
  );
};

Login.propTypes = {
  setBg: PropTypes.func,
  location: PropTypes.object,
};

export default Login;
