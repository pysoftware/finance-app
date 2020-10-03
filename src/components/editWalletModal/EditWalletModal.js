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
  Badge,
  Lead,
} from 'bootstrap-4-react';
import Loader from '../loader';
import {CloseCircleFilled} from '@ant-design/icons';
import {formatter} from '../../helpers';

const EditWalletModal = (
    {
      isShowing,
      isLoadingIncomes,
      error,
      incomes,

      setIsShowing,
      deleteIncomes,
      init,
    },
) => {
  useEffect(() => {
    if (isShowing) {
      init();
    }
  }, [isShowing, init]);

  const iconStyle = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 5,
    fontSize: 15,
  }), []);

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
              <h4>
                Доходы за месяц
              </h4>
              <Loader isLoading={isLoadingIncomes}>
                {
                  incomes.length > 0 ? (
                      <ListGroup
                          style={{
                            overflowY: 'scroll',
                            height: 250,
                            padding: 10,
                          }}
                      >
                        {
                          incomes.map(item => {
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
                                      onClick={() => deleteIncomes(item.id)}
                                  />
                                </ListGroup.Item>
                            );
                          })
                        }
                      </ListGroup>
                  ) : (
                      <Lead>
                        Ничего не найдено
                      </Lead>
                  )
                }

              </Loader>
            </Card.Body>
          </Card>
        </Fragment>
      </Modal>
  );
};

export default EditWalletModal;