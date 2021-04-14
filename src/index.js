import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/';
import thunk from 'redux-thunk';
import './styles/_main.scss';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
