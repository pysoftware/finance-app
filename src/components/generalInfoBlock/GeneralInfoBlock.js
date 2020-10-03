import React, {Fragment, useEffect} from 'react';
import {Container} from 'bootstrap-4-react';

const GeneralInfoBlock = () => {

  useEffect(() => {

  }, []);

  return (
      <Fragment>
        <h5>Общая сумма:&nbsp;3434&nbsp;₽</h5>
        <h5>Траты за месяц:&nbsp;535&nbsp;₽</h5>
        <h5>Доходы за месяц:&nbsp;534&nbsp;₽</h5>
      </Fragment>
  );
};

export default GeneralInfoBlock;