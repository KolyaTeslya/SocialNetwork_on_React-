import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

let h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.querySelector("body")
        .appendChild(h1);

React.createElement("h1",)

setInterval(() => {
  store.dispatch({type:"FAKE"})
}, 1000);

const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
