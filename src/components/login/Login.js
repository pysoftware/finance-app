import React, {useCallback} from 'react';
import {Container, Form, Button, Alert} from 'bootstrap-4-react';
import {Redirect} from 'react-router';
import Loader from '../loader';

const Login = (
    {
      isLoading,
      error,
      email,
      password,
      uid,

      login,
      onChangeForm,
    },
) => {

  const handleOnSubmit = useCallback((event) => {
    event.preventDefault();
    login();
  }, []);

  if (uid) {
    return (
        <Redirect to={'/'}/>
    );
  }

  return (
      <Container>
        <h1>Авторизация</h1>
        {
          error && (
              <Alert danger>
                {error}
              </Alert>
          )
        }
        <Loader isLoading={isLoading}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <label>Почта</label>
              <Form.Input
                  value={email}
                  onChange={
                    ({target: {value}}) => onChangeForm({email: value})
                  }
                  type="email"
                  placeholder="Введите почту"
              />
            </Form.Group>
            <Form.Group>
              <label>Пароль</label>
              <Form.Input
                  value={password}
                  onChange={
                    ({target: {value}}) => onChangeForm({password: value})
                  }
                  type="password"
                  placeholder="Введите пароль"
              />
            </Form.Group>
            <Button primary type="submit">
              Войти
            </Button>
          </Form>
        </Loader>
      </Container>
  );
};

export default Login;