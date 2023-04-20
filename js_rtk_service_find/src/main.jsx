import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";

import "./style.css";
import SpinnerContextProvider from "./context/spinner-context-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SpinnerContextProvider>
        <App />
      </SpinnerContextProvider>
    </Provider>
  </React.StrictMode>
);
