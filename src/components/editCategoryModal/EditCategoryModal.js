import React, {useEffect, useMemo} from 'react';
import Modal from '../modal';
import {
  Button,
  Form,
  Card,
  Alert,
  ListGroup,
  Badge,
  Lead,
} from 'bootstrap-4-react';
import Loader from '../loader';
import {CloseCircleFilled} from '@ant-design/icons';
import {formatter} from '../../helpers';
import firebase from 'Api';

const EditCategoryModal = (
    {
      isShowing,
      isLoading,
      entity,
      error,
      costs,

      setIsShowing,
      onChangeEntity,
      addCategory,
    },
) => {
  const iconStyle = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 5,
    fontSize: 15,
  }), []);

  console.log(costs);

  return (
      <Modal
          isShowing={isShowing}
          onCancel={setIsShowing}
      >
        <Loader isLoading={isLoading}>
          <Card>
            <Card.Body>
              {
                error && (
                    <Alert danger>
                      {error}
                    </Alert>
                )
              }
              <Card.Title>
                Изменение категории "{entity.title}"
              </Card.Title>
              <Form>
                <Form.Group>
                  <label>Название категории</label>
                  <Form.Input
                      value={entity.title}
                      type="text"
                      placeholder="Введите название категории"
                      onChange={
                        ({target: {value}}) => onChangeEntity({
                          title: value,
                        })
                      }
                  />
                </Form.Group>
                <Form.Group>
                  <label>Лимит трат</label>
                  <Form.Input
                      value={entity.sum_limit}
                      type="number"
                      placeholder="Введите лимит трат"
                      onChange={
                        ({target: {value}}) => onChangeEntity({
                          sum_limit: value,
                        })
                      }
                  />
                </Form.Group>
              </Form>
              {
                costs.length && (
                    <ListGroup
                        style={{overflowY: 'scroll', height: 200, padding: 10}}
                    >
                      {
                        costs.map(item => {
                          return (
                              <ListGroup.Item
                                  key={item.id}
                                  display="flex"
                                  justifyContent="between"
                              >
                                <div>
                                  <Lead>
                                    Сумма:&nbsp;{
                                    formatter.format(
                                        item.sum,
                                    )
                                  }&nbsp;₽
                                  </Lead>
                                  <Lead>
                                    Дата:&nbsp;
                                    {
                                      item.date.toDate().
                                          toLocaleDateString('ru-RU')
                                    }
                                  </Lead>
                                </div>

                                <CloseCircleFilled
                                    style={{
                                      ...iconStyle,
                                      fontSize: 30,
                                      color: 'red',
                                    }}
                                />
                              </ListGroup.Item>
                          );
                        })
                      }
                    </ListGroup>
                )
              }

            </Card.Body>
            <Card.Footer>
              <Button
                  onClick={addCategory}
                  success
              >
                Сохранить
              </Button>
            </Card.Footer>
          </Card>
        </Loader>
      </Modal>
  );
};

export default EditCategoryModal;