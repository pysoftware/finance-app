import React, {useMemo} from 'react';
import {Card, Button, Row, Col} from 'bootstrap-4-react';
import {CloseCircleFilled, EditOutlined} from '@ant-design/icons';

const CategoryCard = (
    {
      title,
      sumLimit,
      costsSumPerMonth,

      onDelete,
      onEdit,
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

  return (
      <Card>
        <Card.Body>
          <Card.Title>
            {
              title?.toUpperCase()
            }
          </Card.Title>
          <Card.Text text={'muted'}>
            Траты за месяц: {costsSumPerMonth} ₽
          </Card.Text>

          {
            sumLimit > 0 && (
                <Card.Text text={'muted'}>
                  Лимит на месяц: {sumLimit} ₽
                </Card.Text>
            )
          }

        </Card.Body>
        <Card.Footer>
          <Row className={'d-flex justify-content-between'}>
            <Col col={'xs'}>
              <Button
                  success
                  mr={1}
                  mt={1}
                  onClick={onEdit}
              >
                <EditOutlined
                    style={iconStyle}
                />
                Редактировать
              </Button>

            </Col>
            <Col col={'xs'}>
              <Button
                  danger
                  onClick={onDelete}
                  mt={1}
              >
                <CloseCircleFilled
                    style={{
                      ...iconStyle,
                    }}
                />
                Удалить
              </Button>
            </Col>
          </Row>

        </Card.Footer>
      </Card>
  );
};

export default CategoryCard;