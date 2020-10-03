import React, {useEffect} from 'react';
import Modal from '../modal';
import {Button, Form, Card, Alert} from 'bootstrap-4-react';
import Loader from '../loader';

const AddIncomesModal = (
    {
      isShowing,
      isLoading,
      error,
      entity: {
        sum,
      },

      init,
      setIsShowing,
      addIncomes,
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
                Добавить доход
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
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button
                  onClick={addIncomes}
                  success
              >
                Добавить доход
              </Button>
            </Card.Footer>
          </Card>
        </Loader>
      </Modal>
  );
};

export default AddIncomesModal;