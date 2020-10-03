import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <Layout/>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
