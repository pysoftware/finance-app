import React from 'react';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {Redirect, Route} from 'react-router';

const PrivateRoute = (
    {
      children,
      auth,
      redirectTo,
      ...rest
    },
) => {
  return (
      <Route
          {...rest}
          render={({location}) =>
              isLoaded(auth) && !isEmpty(auth) ? (
                  children
              ) : (
                  <Redirect
                      to={{
                        pathname: '/login',
                        state: {from: location},
                      }}
                  />
              )
          }
      />
  );
};

export default PrivateRoute;