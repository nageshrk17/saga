import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './Main';
import rootSaga from './saga';
import './App.css';




const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  ReduxThunk,
  sagaMiddleware,
];


const store = createStore(
  reducers, {}, applyMiddleware(...middlewares)
);


sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
