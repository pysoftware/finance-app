import React, {useMemo} from 'react';
import {Card, Button} from 'bootstrap-4-react';
import {CloseCircleFilled, EditOutlined} from '@ant-design/icons';

const CategoryCard = (
    {
      title,
      sumLimit,

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
            Траты за месяц: 333 ₽
          </Card.Text>

          {
            sumLimit > 0 && (
                <Card.Text text={'muted'}>
                  Лимит на месяц: {sumLimit} ₽
                </Card.Text>
            )
          }

        </Card.Body>
        <Card.Footer className={'d-flex justify-content-between'}>
          <Button success mr={5} onClick={onEdit}>
            <EditOutlined
                style={iconStyle}
            />
            Редактировать
          </Button>
          <Button danger onClick={onDelete}>
            <CloseCircleFilled
                style={{
                  ...iconStyle,
                }}
            />
            Удалить
          </Button>
        </Card.Footer>
      </Card>
  );
};

export default CategoryCard;