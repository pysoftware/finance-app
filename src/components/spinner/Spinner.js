import React from 'react';
import './styles.css';

const Spinner = () => (
    <div className={'loader'}>
      <div className={'lds-dual-ring'}/>
    </div>
);

export default Spinner;