import React, {useEffect} from 'react';
import Loader from '../loader';
import {formatter} from '../../helpers';

const Wallet = (
    {
      lossesPerMonth,
      incomesPerMonth,
      totalSum,
      isLoading,

      init,
    },
) => {

  useEffect(() => {
    init();
  }, [init]);

  return (
      <Loader isLoading={isLoading}>
        <h1>Кошелек: </h1>
        <h5>
          Общая сумма:&nbsp;{formatter.format(totalSum)}&nbsp;₽
        </h5>
        <h5>
          Траты за месяц:&nbsp;{formatter.format(lossesPerMonth)}&nbsp;₽
        </h5>
        <h5>
          Доходы за месяц:&nbsp;{formatter.format(incomesPerMonth)}&nbsp;₽
        </h5>
      </Loader>
  );
};

export default Wallet;