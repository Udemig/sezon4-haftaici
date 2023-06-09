import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
