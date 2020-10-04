import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Modal from '../modal';
import {
  Button,
  Form,
  Card,
  Alert,
  ListGroup,
  Lead,
} from 'bootstrap-4-react';
import Loader from '../loader';
import {CloseCircleFilled} from '@ant-design/icons';
import {formatter} from '../../helpers';

const EditCategoryModal = (
    {
      isShowing,
      isLoadingEntity,
      isLoadingCosts,
      entity,
      error,
      costs,

      setIsShowing,
      editCategory,
      deleteCosts,
    },
) => {
  const [copiedEntity, setCopiedEntity] = useState(entity);
  useEffect(() => {
    setCopiedEntity(entity);
  }, [entity]);
  const iconStyle = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 5,
    fontSize: 15,
  }), []);

  const onChangeEntity = useCallback((obj) => {
    setCopiedEntity(prevState => ({...prevState, ...obj}));
  }, []);

  return (
      <Modal
          isShowing={isShowing}
          onCancel={setIsShowing}
      >
        <Fragment>
          <Card>
            <Card.Body>
              {
                error && (
                    <Alert danger>
                      {error}
                    </Alert>
                )
              }
              <Loader isLoading={isLoadingEntity}>
                <Card.Title>
                  Изменение категории "{entity.title}"
                </Card.Title>
                <Form>
                  <Form.Group>
                    <label>Название категории</label>
                    <Form.Input
                        value={copiedEntity.title}
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
                        value={copiedEntity.sum_limit}
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
              </Loader>

              <Loader isLoading={isLoadingCosts}>
                {
                  costs.length > 0 && (
                      <ListGroup
                          style={{
                            overflowY: 'scroll',
                            height: 250,
                            padding: 10,
                          }}
                      >
                        {
                          costs.map(item => {
                            return (
                                <ListGroup.Item
                                    key={item.id}
                                    display="flex"
                                    justifyContent="between"
                                    mb={2}
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
                                      onClick={() => deleteCosts(item.id)}
                                  />
                                </ListGroup.Item>
                            );
                          })
                        }
                      </ListGroup>
                  )
                }

              </Loader>
            </Card.Body>

            <Card.Footer>
              <Button
                  onClick={() => editCategory(copiedEntity)}
                  success
              >
                Сохранить
              </Button>
            </Card.Footer>
          </Card>
        </Fragment>
      </Modal>
  );
};

export default EditCategoryModal;