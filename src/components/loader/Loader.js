import React, {Fragment} from 'react';

const Loader = ({
  Spinner,
}) => ({
  classes,

  children,

  isLoading,
}) => {

  if (isLoading) {
    return (
        <div className={classes.loader}>
          <Spinner/>
        </div>
    );
  }

  return (
      <Fragment>
        {children}
      </Fragment>
  );
};

export default Loader;