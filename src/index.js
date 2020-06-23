<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Redux/reducer";
import * as Sentry from "@sentry/browser";
>>>>>>> 53960a5f684e7aa8310374898a243053fa18aa6f

const store = createStore(reducer, applyMiddleware(thunk));

if (process.env.NODE_ENV === "production") {
    Sentry.init({
        dsn:
            "https://97beba458f3f41c5a333814f6ff02c1d@o371117.ingest.sentry.io/5227083",
    });
}
ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
=======
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
>>>>>>> 53960a5f684e7aa8310374898a243053fa18aa6f
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
