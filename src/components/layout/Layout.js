import React, {Fragment} from 'react';
import Categories from '../categories';
import {Container} from 'bootstrap-4-react';
import AddCostsModal from '../addCostsModal';
import AddCategoryModal from '../addCategoryModal';
import Header from '../header';
import GeneralInfoBlock from '../generalInfoBlock';

const Layout = () => {

  return (
      <Fragment>

        <AddCostsModal/>
        <AddCategoryModal/>

        <Header/>
        <Container>
          <GeneralInfoBlock/>
          <Categories/>
        </Container>
      </Fragment>
  );
};

export default Layout;