import React, {Fragment} from 'react';
import Categories from '../categories';
import {Container} from 'bootstrap-4-react';
import AddCostsModal from '../addCostsModal';
import AddCategoryModal from '../addCategoryModal';
import Header from '../header';
import Wallet from '../wallet';
import AddIncomesModal from '../addIncomesModal';
import EditCategoryModal from '../editCategoryModal';
import EditWalletModal from '../editWalletModal';

const Layout = () => {

  return (
      <Fragment>

        <AddCostsModal/>
        <AddCategoryModal/>
        <AddIncomesModal/>
        <EditCategoryModal/>
        <EditWalletModal/>

        <Header/>
        <Container>
          <Wallet/>
          <Categories/>
        </Container>
      </Fragment>
  );
};

export default Layout;