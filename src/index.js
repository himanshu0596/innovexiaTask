import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/RootSaga";
import { Provider } from "react-redux";
import allReducers from "./reducer/reducer";

/*
Index Js

will initialize whole application with store and saga as middleware applied so that all the components can access share
this reducer state
*/
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept(App);
}

reportWebVitals();
