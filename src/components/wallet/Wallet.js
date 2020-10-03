import React, {useEffect, useMemo} from 'react';
import Loader from '../loader';
import {formatter} from '../../helpers';
import {EditOutlined} from '@ant-design/icons';
import {Button} from 'bootstrap-4-react';

const Wallet = (
    {
      lossesPerMonth,
      incomesPerMonth,
      totalSum,
      isLoading,

      init,
      onEditWallet,
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

  useEffect(() => {
    init();
  }, [init]);

  return (
      <Loader isLoading={isLoading}>
        <h1>Кошелек:
          <EditOutlined
              style={{
                ...iconStyle,
                backgroundColor: '#eee',
                padding: 10,
                marginLeft: 5,
                fontSize: 25,
              }}
              onClick={onEditWallet}
          /></h1>
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