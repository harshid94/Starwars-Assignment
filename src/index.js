import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import createHistory from "history/createBrowserHistory";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./Assets/font/Alegreya/Alegreya-Medium.ttf";
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
