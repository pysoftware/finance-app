import React from 'react';
import {Card} from 'bootstrap-4-react';
import {EditOutlined} from '@ant-design/icons';

const CategoryCard = (
    {
      title,
      sumLimit,
    },
) => {

  return (
      <Card>
        <Card.Body>
          <Card.Title className={'d-flex justify-content-between'}>
            {title}
            <EditOutlined
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                  cursor: 'pointer',
                  padding: 5,
                  backgroundColor: '#eee',
                  borderRadius: 5,
                }}
            />
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
      </Card>
  );
};

export default CategoryCard;