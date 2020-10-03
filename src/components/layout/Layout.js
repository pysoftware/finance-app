import React, {useEffect} from 'react';
import {Container, Row, Col, BDiv} from 'bootstrap-4-react';
import {firestore} from '../../api';

const Layout = () => {

  useEffect(() => {
    firestore.collection('categories').get().then(value => {
      console.log(value);
    });
  }, []);

  return (
      <Container>
        <Row>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
        </Row>
      </Container>
  );
};

export default Layout;