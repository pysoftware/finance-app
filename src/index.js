import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './store';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
