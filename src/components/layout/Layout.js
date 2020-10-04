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
import {Redirect, Route, Switch} from 'react-router';
import Register from '../register';
import Login from '../login';
import PrivateRoute from '../privateRoute';
import {isLoaded, isEmpty} from 'react-redux-firebase';

const Layout = (
    {
      auth,
    },
) => {
  return (
      <Fragment>
        <Header/>

        <Switch>
          {
            isLoaded(auth) && !isEmpty(auth) && (
                <PrivateRoute exact path={'/'}>

                  <AddCostsModal/>
                  <AddCategoryModal/>
                  <AddIncomesModal/>
                  <EditCategoryModal/>
                  <EditWalletModal/>

                  <Container>
                    <Wallet/>
                    <Categories/>
                  </Container>

                </PrivateRoute>
            )
          }
          <Route path={'/register'}>
            <Register/>
          </Route>

          <Route path={'/login'}>
            <Login/>
          </Route>

          <Redirect to={'/login'}/>
        </Switch>

      </Fragment>
  );
};

export default Layout;