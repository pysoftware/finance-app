import React, {useEffect} from 'react';
import Modal from '../modal';
import {Button, Form, Card, Alert} from 'bootstrap-4-react';
import Loader from '../loader';

const AddCategoryModal = (
    {
      isShowing,
      isLoading,
      entity: {
        title,
        sum_limit: sumLimit,
      },
      error,

      setIsShowing,
      onChangeEntity,
      addCategory,
      init,
    },
) => {

  useEffect(() => {
    if (isShowing) {
      init();
    }
  }, [isShowing, init]);

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
                Добавить категорию
              </Card.Title>
              <Form>
                <Form.Group>
                  <label>Название категории</label>
                  <Form.Input
                      value={title}
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
                      value={sumLimit}
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
            </Card.Body>
            <Card.Footer>
              <Button
                  onClick={addCategory}
                  success
              >
                Добавить категорию
              </Button>
            </Card.Footer>
          </Card>
        </Loader>
      </Modal>
  );
};

export default AddCategoryModal;