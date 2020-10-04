import React from 'react';
import {Container, Form, Button} from 'bootstrap-4-react';

const Register = () => {
  return (
      <Container>
        <h1>REGISTER</h1>
        <Form>
          <Form.Group>
            <label>Email address</label>
            <Form.Input
                type="email"
                placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <label>Password</label>
            <Form.Input
                type="password"
                placeholder="Password"
            />
          </Form.Group>
          <Button primary type="submit">Submit</Button>
        </Form>
      </Container>
  );
};

export default Register;