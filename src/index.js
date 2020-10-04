import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'Api';
import './index.css';
import Layout from './components/layout';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {HashRouter} from 'react-router-dom';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import {isLoaded, isEmpty} from 'react-redux-firebase';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const firebaseConfig = {
  attachAuthIsReady: true,
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  onAuthStateChanged: (user) => {
    if (user) {
      console.log(user);
      return <h1>a</h1>;
    }
  },
};

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
            config={firebaseConfig}
            dispatch={store.dispatch}
            firebase={firebase}
            createFirestoreInstance={createFirestoreInstance}
        >
          <HashRouter>
            <Layout/>
          </HashRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
