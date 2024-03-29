import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./assets/font/stylesheet.css";
import "./main.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./redux/rootReducer";

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
