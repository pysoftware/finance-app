import React, {Fragment, useEffect, useState} from 'react';
import CategoryCard from '../categories/components/categoryCard';
import Categories from '../categories';
import {
  Container,
  Card,
  Collapse,
  Navbar,
  Button,
  Form,
  BDiv,
  Modal,
} from 'bootstrap-4-react';
import {firestore} from 'Api';

const Layout = () => {
  //
  // const [categories, setCategories] = useState([]);
  //
  // useEffect(() => {
  //   firestore.collection('categories').get().then(value => {
  //     setCategories(value.docs);
  //   });
  // }, []);

  return (
      <Fragment>

        <Modal id="exampleModal" fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Добавление траты</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <label>Сумма</label>
                    <Form.Input
                        type="number"
                        placeholder="Введите сумму"
                        onChange={(event) => console.log(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleControlsInput1">
                      Категория
                    </label>
                    <Form.Select>
                      <option>Large select</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Закрыть</Button>
                <Button primary>Добавить трату</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>

        <Navbar expand="lg" dark bg="dark" mb="3" sticky="top">
          <Navbar.Brand href="#">Финансы</Navbar.Brand>
          <Navbar.Toggler target={'#navbar'}/>
          <Collapse navbar id={'navbar'} justifyContent="end">
            <BDiv my="2 lg-0">
              <Button success mr={2} mt={2}>
                Добавить категорию
              </Button>
              <Button
                  info
                  mr={2}
                  mt={2}
                  data-toggle="modal"
                  data-target="#exampleModal"
              >
                Добавить трату
              </Button>
            </BDiv>
          </Collapse>
        </Navbar>

        <Container>

          <h5>Общая сумма:&nbsp;3434&nbsp;₽</h5>
          <h5>Траты за месяц:&nbsp;535&nbsp;₽</h5>
          <h5>Доходы за месяц:&nbsp;534&nbsp;₽</h5>

          <Categories/>




        </Container>
      </Fragment>
  );
};

export default Layout;