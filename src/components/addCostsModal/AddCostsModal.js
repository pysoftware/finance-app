import React, {useEffect} from 'react';
import Modal from '../modal';
import {Button, Form, Card, Alert} from 'bootstrap-4-react';
import Loader from '../loader';

const AddCostsModal = (
    {
      isShowing,
      categories,
      isLoading,
      error,
      entity: {
        sum,
        categoryId,
      },

      init,
      setIsShowing,
      addCosts,
      onChangeEntity,
    },
) => {

  useEffect(() => {
    if (isShowing) {
      init();
    }
  }, [isShowing]);

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
                Добавить трату
              </Card.Title>
              <Form>
                <Form.Group>
                  <label>Сумма</label>
                  <Form.Input
                      value={sum}
                      type="number"
                      placeholder="Введите сумму"
                      onChange={
                        ({target: {value}}) => onChangeEntity({
                          sum: value,
                        })
                      }
                  />
                </Form.Group>
                {
                  categories.length > 0 ? (
                      <Form.Group>
                        <label htmlFor="exampleControlsInput1">
                          Категория
                        </label>
                        <Form.Select
                            value={categoryId}
                            onChange={({target: {value}}) => onChangeEntity({
                              categoryId: value,
                            })}>
                          <option value={''}>
                            Выберите
                          </option>
                          {
                            categories.map(item => {
                              return (
                                  <option
                                      key={item.id}
                                      value={item.id}
                                  >
                                    {
                                      item.data().title.capitalize()
                                    }
                                  </option>
                              );
                            })
                          }
                        </Form.Select>
                      </Form.Group>
                  ) : (
                      <Alert danger>
                        Сначала создайте категорию
                      </Alert>
                  )
                }
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button
                  disabled={categories?.length <= 0}
                  onClick={categories?.length && addCosts}
                  success
              >
                Добавить трату
              </Button>
            </Card.Footer>
          </Card>
        </Loader>
      </Modal>
  );
};

export default AddCostsModal;