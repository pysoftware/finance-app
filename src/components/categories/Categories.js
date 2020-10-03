import React, {useEffect} from 'react';
import Loader from '../loader';
import CategoryCard from './components/categoryCard';
import {Card} from 'bootstrap-4-react';

const Categories = (
    {
      categories,
      isLoading,

      fetchCategories,
      deleteCategory,
      onEditCategory,
    },
) => {

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
      <Loader isLoading={isLoading}>
        {
          (() => {
            let items = [];
            return categories.map((item, index) => {
              if (index % 2 === 0) {
                items = [];
              }
              items.push((
                  <CategoryCard
                      key={item.id}
                      title={item.title}
                      sumLimit={item.sum_limit}
                      costsSumPerMonth={item.costsSumPerMonth}
                      onEdit={() => onEditCategory(item.id)}
                      onDelete={() => deleteCategory(item.id)}
                  />
              ));

              if (
                  index > 0 && index % 2 !== 0
                  || categories.length === index + 1
              ) {
                return (
                    <Card.Deck
                        mb={'3'}
                        mt={'3'}
                        key={index}
                    >
                      {[...items]}
                    </Card.Deck>
                );
              }
            });
          })()
        }
      </Loader>
  );
};

export default Categories;