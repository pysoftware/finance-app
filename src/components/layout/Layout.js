import React, {Fragment, useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  BSmall,
  Card,
  Collapse,
  Navbar,
  Nav,
  Button,
  Form,
  BDiv,
  Modal,
} from 'bootstrap-4-react';
import {firestore} from 'Api';
import {Typography} from 'antd';

const {Text, Title} = Typography;

const Layout = () => {

  useEffect(() => {
    firestore.collection('categories').get().then(value => {
      value.forEach(item => console.log(item.data()));
    });
  }, []);

  return (
      <Fragment>

        <Modal id="exampleModal" fade>
          <Modal.Dialog>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                Modal body text goes here.
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
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
              <Button info mr={2} mt={2}>
                Добавить трату
              </Button>
              <Button primary data-toggle="modal" data-target="#exampleModal">
                Launch modal
              </Button>
            </BDiv>
          </Collapse>
        </Navbar>
        <Container>

          <h5>Общая сумма:&nbsp;3434&nbsp;₽</h5>
          <h5>Траты за месяц:&nbsp;535&nbsp;₽</h5>
          <h5>Доходы за месяц:&nbsp;534&nbsp;₽</h5>
          <Card.Deck mb="3" mt={'3'}>
            <Card>
              <Card.Body>
                <Card.Title>Развлечения</Card.Title>
                <Card.Subtitle>1</Card.Subtitle>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <BSmall text="muted">
                    Last updated 3 mins ago
                  </BSmall>
                </Card.Text>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content
                  than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <BSmall text="muted">
                    Last updated 3 mins ago
                  </BSmall>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Card.Deck>
          <Card.Deck mb="3" mt={'3'}>
            <Card>
              <Card.Body>
                <Card.Title>Развлечения</Card.Title>
                <Card.Subtitle>1</Card.Subtitle>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <BSmall text="muted">
                    Last updated 3 mins ago
                  </BSmall>
                </Card.Text>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content
                  than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <BSmall text="muted">
                    Last updated 3 mins ago
                  </BSmall>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Card.Deck>
        </Container>
      </Fragment>
  );
};

export default Layout;